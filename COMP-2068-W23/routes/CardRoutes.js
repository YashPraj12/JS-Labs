import { Router } from "express";
import {
    index,
    show,
    add,
    edit,
    create,
    update,
    remove
} from "../controllers/CardsController.js";
import { isAuthenticated } from "../controllers/AuthenticationController.js";

const router = Router();

router.use(isAuthenticated);
router.get("/", index);
router.get("/new", add);
router.get("/:id", show);
router.get("/:id/edit", edit);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
