import { Request, Response } from "express";
import { RegisterBusiness } from "../../business/register/RegisterBusiness";
import { RegisterInputDTO } from "../../model/register/RegisterInputDTO";

export const create = async (req: Request, res: Response) => {
  try {
    const registerData: RegisterInputDTO = {
      name: req.body.name,
      age: req.body.age,
      maritalstatus: req.body.maritalstatus,
      cpf: req.body.cpf,
      city: req.body.city,
      state: req.body.state,
    };

    const registerBusiness = new RegisterBusiness();
    await registerBusiness.register(registerData);

    res.status(200).send({ message: "Registered successfully!" });
  } catch (error) {
    res.status(error.statusCode || 400).send({ error: error.message });
  }
};
