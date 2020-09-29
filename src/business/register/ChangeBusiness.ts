import { RegisterDatabase } from "../../data/RegisterDatabase";
import { ChangeInputRegisterDTO } from "../../model/register/ChangeInputRegisterDTO";
import { CreateDTO } from "../../model/register/CreateDTO";

export class ChangeBusiness {
  async change(input: ChangeInputRegisterDTO) {
    const registerDatabase = new RegisterDatabase();
    const findRegister = await registerDatabase.getById(input.id);

    if (!findRegister) {
      throw new Error("Register not found");
    }

    const changeRegister = new CreateDTO(
      input.id,
      input.name,
      input.age,
      input.maritalstatus,
      input.cpf,
      input.city,
      input.state
    );

    await registerDatabase.change(changeRegister);
  }
}
