import { Router } from "express";
const router = Router();

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

router.get("/products", getProducts);

router.post("/products", createProduct);

router.put("/products", updateProduct);

router.delete("/products", deleteProduct);

export default router;
