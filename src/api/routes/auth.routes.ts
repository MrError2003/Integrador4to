import express from "express";
import {
  apiLogin,
  apiMobileLogin,
  apiLogout,
  apiRegister,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", apiRegister);
router.post("/mobile-login", apiMobileLogin);
router.post("/login", apiLogin);
router.get("/logout", apiLogout);

export default router;
