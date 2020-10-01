import { RegisterDatabase } from "../../data/RegisterDatabase";

export class SearchRegister {
  async getAllRegister() {
    const registerDatabase = new RegisterDatabase();
    const registerList = await registerDatabase.getAllRegister();

    return registerList;
  }
}
