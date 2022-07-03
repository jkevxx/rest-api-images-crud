import { Router } from "express";
import fileUpload from "express-fileupload";

const router = Router();

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post(
  "/products",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  createProduct
);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;
