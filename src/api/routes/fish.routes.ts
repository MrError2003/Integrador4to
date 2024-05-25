import express from "express";
import {
  createFish,
  createManyFish,
  deleteFish,
  getFish,
  getFishes,
  updateFish,

} from "../controllers/fish.controller";

const router = express.Router();

router.post("/", createFish);
router.post("/many", createManyFish);
router.delete("/:id", deleteFish);
router.get("/:id", getFish);
router.get("/", getFishes);
router.put("/:id",  updateFish);

export default router;
