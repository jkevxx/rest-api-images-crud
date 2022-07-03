// CONFIG OF EXPRESS

//const express = require('express');
import express from "express";
import cors from "cors";
// FILE ROUTES
import indexRoutes from "./routes/index.routes.js";
import productsRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use(productsRoutes);

export default app;
