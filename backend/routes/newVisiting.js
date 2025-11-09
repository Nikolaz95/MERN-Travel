import expres from "express"
import { isAuthenticatedUser } from "../middlewares/auth.js";
import { createNewVisiting, getVisitiList, removeFromVisitList } from "../controllers/newVisitingControllers.js";
const router = expres.Router();

router.route("/visitlist/add").post(isAuthenticatedUser, createNewVisiting);
//get wathclis of user 
router.route("/visitlist/me").get(isAuthenticatedUser, getVisitiList);
router.route("/visit/:id").delete(isAuthenticatedUser, removeFromVisitList);


// Admin-only route


export default router;