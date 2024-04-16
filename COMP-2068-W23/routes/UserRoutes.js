import multer from "multer";
import crypto from "crypto";
import { Router } from "express";
import { index, show, add, edit, create, update, remove } from "../controllers/UsersController.js";
import { isAuthenticated, isRole } from "../controllers/AuthenticationController.js";

const router = Router();

const tempStorageLocation = "temp";

const storage = multer.diskStorage({
    destination: (_, __, callback) => {
        callback(null, tempStorageLocation);
    },
    
    filename: (req, file, callback) => {
        const filename = `${generateRandomHexKey()}-${file.originalname}`;
        callback(null, filename);
    },
});

const upload = multer({ storage });

const requestCheck = (req, _, next) => {
    if (req.method === "post") {
        if (req.body._method && req.body._method === "put") {
            req.method === "put";
        }
    }
    next();
};


router.get("/", isAuthenticated, isRole("ADMIN"), index);

router.get("/new", add);

router.get("/:id", isAuthenticated, show);

router.get("/:id/edit", isAuthenticated, edit);

router.post("/", upload.single("avatar"), create);

router.post("/:id", (req, res, next) => {
    req.method = "put"; 
    next();
});

router.put("/:id", isAuthenticated, upload.single("avatar"), update);

router.delete("/:id", isAuthenticated, isRole("ADMIN"), remove);

function generateRandomHexKey() {
    return crypto.randomBytes(8 / 2).toString("hex");
}

export default router;
