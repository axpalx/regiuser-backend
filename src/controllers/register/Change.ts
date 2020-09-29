import { Request, Response } from "express";
import { ChangeBusiness } from "../../business/register/ChangeBusiness";
import { ChangeInputRegisterDTO } from "../../model/register/ChangeInputRegisterDTO";

export const change = async (req: Request, res: Response) => {
  try {
    const registerData: ChangeInputRegisterDTO = {
      id: req.query.id as string,
      name: req.body.name,
      age: req.body.age,
      maritalstatus: req.body.maritalstatus,
      cpf: req.body.cpf,
      city: req.body.city,
      state: req.body.state,
    };

    const changeRegister = new ChangeBusiness();
    await changeRegister.change(registerData);

    res.status(200).send({ message: "Registration changed successfully." });
  } catch (error) {
    res.status(error.statusCode || 400).send({ error: error.message });
  }
};
