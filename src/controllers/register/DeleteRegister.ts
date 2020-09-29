import { Request, Response } from "express";
import { DeleteBusiness } from "../../business/register/DeleteBusiness";
import { DeleteDTO } from "../../model/register/DeleteDTO";

export const deleteRegister = async (req: Request, res: Response) => {
  try {
    const registerData: DeleteDTO = {
      id: req.query.id as string,
    };

    const deleteRegister = new DeleteBusiness();
    await deleteRegister.delete(registerData);

    res.status(200).send({ message: "Deleted registration." });
  } catch (error) {
    res.status(error.statusCode || 400).send({ error: error.message });
  }
};
