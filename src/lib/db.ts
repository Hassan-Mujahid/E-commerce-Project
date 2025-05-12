// // lib/db.ts
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error("MONGODB_URI is not defined in .env");
// }

// declare global {
//   var mongoose: {
//     conn: typeof mongoose | null;
//     promise: any | null;
//   };
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectToDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in the environment variables");
}

interface MongooseGlobalCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Use global cache to prevent creating new connections on hot reloads (dev only)
declare global {
  // For Node.js global object
  let mongooseCache: MongooseGlobalCache | undefined;
}

// Initialize global cache
const globalWithMongoose = global as typeof globalThis & {
  mongooseCache: MongooseGlobalCache;
};

if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = {
    conn: null,
    promise: null,
  };
}

export async function connectToDB(): Promise<Mongoose> {
  const cache = globalWithMongoose.mongooseCache;

  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    const options = {
      bufferCommands: false, // Important for serverless
    };

    cache.promise = mongoose.connect(MONGODB_URI, options);
  }

  try {
    cache.conn = await cache.promise;
    return cache.conn;
  } catch (err) {
    cache.promise = null;
    throw err;
  }
}
