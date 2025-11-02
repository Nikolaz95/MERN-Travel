import expres from "express"
import { getProducts } from "../controllers/productControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = expres.Router();

router.route("/products").get(isAuthenticatedUser, getProducts)


export default router;