import { Request, Response } from "express";

import { SearchRegister } from "../../business/register/SearchRegister";

export const getAll = async (req: Request, res: Response) => {
  try {
    const searchRegister = new SearchRegister();
    const result = await searchRegister.getAllRegister();

    res.status(200).send({ result });
  } catch (error) {
    res.status(error.statusCode || 400).send({ error: error.message });
  }
};
