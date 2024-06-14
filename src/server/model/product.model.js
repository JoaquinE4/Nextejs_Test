import mongoose from "mongoose";

const productosSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: Number,
    thumbnail: String,
    code: {
      type: String,
      unique: true,
      required: true,
    },
    categoria: String, // ¿Es posible que esto debería ser "categoria"?
    stock: Number,
  },
  {
    timestamps: true,
  }
);

export const ProductosModels = mongoose.models.productos || mongoose.model("productos", productosSchema);
