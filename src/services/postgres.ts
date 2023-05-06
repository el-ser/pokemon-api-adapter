import type { ClientConfig } from "pg";
import { Pool } from "pg";
import { PokemonDetails } from "./graphql";

require("dotenv").config();

const connectionDetails: ClientConfig = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  ssl: true,
  port: parseInt(process.env.POSTGRES_PORT!),
};

async function checkDatabase(pool: Pool, id: string) {
  const checkQuery = `SELECT * FROM "pokemon_list" WHERE "id" = $1`;
  return pool.query(checkQuery, [id]);
}

async function insertToDatabase(pool: Pool, res: PokemonDetails) {
  const insertQuery = {
    text: "INSERT INTO pokemon_list(id, name, number) VALUES($1, $2, $3)",
    values: [res.pokemon.id, res.pokemon.name, res.pokemon.number],
  };
  return pool.query(insertQuery);
}

export async function verifyDatabase(res: PokemonDetails) {
  try {
    const pool = new Pool(connectionDetails);

    await pool.connect();
    const checkResult = await checkDatabase(pool, res.pokemon.id);

    if (checkResult.rowCount === 0) {
      await insertToDatabase(pool, res);

      return { inserted: true };
    }

    return {
      inserted: false,
    };
  } catch (error) {
    console.log(error);
  }
}
