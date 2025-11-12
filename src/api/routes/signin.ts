import { Router } from "express";
import { signin } from "../controllers/signin";

export default Router()
                    .post("/", signin);