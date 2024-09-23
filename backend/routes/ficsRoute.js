import express from "express";
import { Fic } from "../models/ficModel.js";

const router = express.Router();

router.get("/", (req, res) => {
    try {
        console.log("GET success");
        return res.status(234).send("GET here");
    } 
    catch(e) {
        console.log(e);
    }
})

export default router;

