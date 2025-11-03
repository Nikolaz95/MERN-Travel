import expres from "express"
import { isAuthenticatedUser } from "../middlewares/auth.js";
import { createNewVisiting, removeFromVisitList } from "../controllers/newVisitingControllers.js";
const router = expres.Router();

router.route("/visiting/add").post(isAuthenticatedUser, createNewVisiting);

router.route("/visiting/:id").delete(isAuthenticatedUser, removeFromVisitList);


// Admin-only route


export default router;