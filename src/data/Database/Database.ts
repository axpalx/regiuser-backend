import knex from "knex";
import Knex from "knex";

export abstract class Database {
  private static CONNECTION: Knex | null = null;

  protected getConnection = (): Knex => {
    if (Database.CONNECTION === null) {
      Database.CONNECTION = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT || "3306"),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
      });
    }
    return Database.CONNECTION;
  };

  public static destroyConnection = async (): Promise<void> => {
    if (Database.CONNECTION) {
      await Database.CONNECTION.destroy();
      Database.CONNECTION = null;
    }
  };
}
