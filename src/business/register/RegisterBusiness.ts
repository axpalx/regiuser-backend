import { RegisterDatabase } from "../../data/RegisterDatabase";
import { CreateDTO } from "../../model/register/CreateDTO";
import { RegisterInputDTO } from "../../model/register/RegisterInputDTO";
import { IdGenerator } from "../../services/idGenerator";

export class RegisterBusiness {
  async register(input: RegisterInputDTO) {
    if (!input.name) {
      throw new Error("Name field is required.");
    }

    if (!input.age) {
      throw new Error("Age field is required.");
    }

    if (!input.maritalstatus) {
      throw new Error("Marital status field is required.");
    }

    if (!input.cpf) {
      throw new Error("CPF field is required.");
    }

    if (!input.city) {
      throw new Error("City field is required.");
    }

    if (!input.state) {
      throw new Error("State field is required.");
    }

    const idGenerator = new IdGenerator();
    const id = await idGenerator.generateId();

    const registerDatabase = new RegisterDatabase();

    const registerData = new CreateDTO(
      id,
      input.name,
      input.age,
      input.maritalstatus,
      input.cpf,
      input.city,
      input.state
    );

    await registerDatabase.create(registerData);

    return registerData;
  }
}
