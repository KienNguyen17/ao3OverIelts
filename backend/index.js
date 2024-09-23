import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import ficsRoute from "./routes/ficsRoute.js";
import { Fic } from "./models/ficModel.js";

const app = express()

app.get("/", (req, res) => {
    console.log(req)
    return res.status(234).send("Here we are");
});

app.use(express.json());

app.use("/fics", ficsRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening in port ${PORT}`);
        });
    })
    .catch((e) => {
        console.log(e);
    }); 