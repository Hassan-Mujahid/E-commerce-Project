import mongoose from "mongoose";

const SpecificationSchema = new mongoose.Schema(
  {
    name: String,
    value: String,
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, required: true, unique: true },
  description: String,
  price: Number,
  category: String,
  rating: { type: Number, default: 4.5 },
  reviews: { type: Number, default: 128 },
  inStock: { type: Boolean, default: true },
  images: [String],
  colors: [String],
  sizes: [String],
  specifications: [SpecificationSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
