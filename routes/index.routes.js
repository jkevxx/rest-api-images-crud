/**
 * const express = require('express');
 * const router = express.Router()
 */

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World xd");
});

router.get("/ping", (req, res) => {
  res.send("pong");
});

export default router;
