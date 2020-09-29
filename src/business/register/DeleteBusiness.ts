import { RegisterDatabase } from "../../data/RegisterDatabase";
import { DeleteDTO } from "../../model/register/DeleteDTO";

export class DeleteBusiness {
  async delete(input: DeleteDTO) {
    const registerDatabase = new RegisterDatabase();
    const findRegister = await registerDatabase.getById(input.id);

    if (!findRegister) {
      throw new Error("Register not found");
    }

    const deleteRegister = input.id;

    await registerDatabase.delete(deleteRegister);
  }
}
