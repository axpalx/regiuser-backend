import express from "express";

import { create } from "../controllers/register/Create";
import { change } from "../controllers/register/Change";
import { deleteRegister } from "../controllers/register/DeleteRegister";
import { getAll } from "../controllers/register/GetAll";

export const registerRouter = express.Router();

registerRouter.post("/create", create);

registerRouter.put("/change", change);

registerRouter.delete("/delete", deleteRegister);

registerRouter.get("/getall", getAll);
