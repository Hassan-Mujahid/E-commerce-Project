// types/global.d.ts
import mongoose from "mongoose";

declare global {
  namespace NodeJS {
    interface Global {
      _mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      };
    }
  }

  // Extend globalThis instead of using var
  interface GlobalThis {
    _mongoose?: {
      conn: typeof mongoose | null;
      promise: Promise<typeof mongoose> | null;
    };
  }
}

export {};
