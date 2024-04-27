import express from "express";
import {
  createFish,
  deleteFish,
  getFish,
  getFishes,
  updateFish,
} from "../controllers/fish.controller";
import { verifyJWT } from "../controllers/auth.controller";

const router = express.Router();

router.post("/", verifyJWT, createFish);
router.delete("/:id", verifyJWT, deleteFish);
router.get("/:id", verifyJWT, getFish);
router.get("/", verifyJWT, getFishes);
router.put("/:id", verifyJWT,  updateFish);

export default router;
