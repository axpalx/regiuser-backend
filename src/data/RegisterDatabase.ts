import { CreateDTO } from "../model/register/CreateDTO";
import { Database } from "./Database/Database";

export class RegisterDatabase extends Database {
  private static TABLE_NAME = "Register";

  public static getTableName = (): string => RegisterDatabase.TABLE_NAME;

  async create(input: CreateDTO): Promise<void> {
    try {
      const id = input.getId();
      const name = input.getName();
      const age = input.getAge();
      const maritalStatus = input.getMaritalStatus();
      const cpf = input.getCpf();
      const city = input.getCity();
      const state = input.getState();
      await this.getConnection()
        .insert({
          id,
          name,
          age,
          maritalStatus,
          cpf,
          city,
          state,
        })
        .into(RegisterDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getById(id: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(RegisterDatabase.TABLE_NAME)
        .where({ id });

      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async change(input: CreateDTO): Promise<void> {
    try {
      const id = input.getId();
      const name = input.getName();
      const age = input.getAge();
      const maritalStatus = input.getMaritalStatus();
      const cpf = input.getCpf();
      const city = input.getCity();
      const state = input.getState();
      await this.getConnection()
        .update({ name, age, maritalStatus, cpf, city, state })
        .where({ id })
        .into(RegisterDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async delete(id: string): Promise<any> {
    try {
      await this.getConnection()
        .delete("*")
        .from(RegisterDatabase.TABLE_NAME)
        .where({ id });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
