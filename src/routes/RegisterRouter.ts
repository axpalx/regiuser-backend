import express from "express";

import { create } from "../controllers/register/Create";
import { change } from "../controllers/register/Change";
import { deleteRegister } from "../controllers/register/DeleteRegister";

export const registerRouter = express.Router();

registerRouter.post("/create", create);

registerRouter.put("/change", change);

registerRouter.delete("/delete", deleteRegister);
