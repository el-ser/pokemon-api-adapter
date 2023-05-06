import { request } from "graphql-request";
import { getAllPokemonsQuery, getPokemonDetailsQuery } from "./queries";
import { log } from "console";

const graphQueryEndpoint = "https://graphql-pokemon2.vercel.app/";

export type PokemonNotFoundResult = {
  pokemon: null;
};

export type Pokemon = {
  id: string;
  number: string;
  name: string;
  image: string;
  classification: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
};

export type Attack = {
  name: string;
  type: string;
  damage: number;
};

export type PokemonDetails = {
  pokemon: Pokemon & {
    types: string[];
    attacks: { fast: Attack[]; special: Attack[] };
    resistant: string[];
    fleeRate: number;
    maxCp: number;
    maxHp: number;
    weaknesses: string[];
    evolutionRequirements: { amount: number; name: string } | null;
  };
};

export async function getAllPokemonsGQL() {
  return await request<{ pokemons: Pokemon[] }>(
    graphQueryEndpoint,
    getAllPokemonsQuery()
  );
}

export async function getPokemonDetailsGQL(id: string) {
  const res = await request<PokemonNotFoundResult | PokemonDetails>(
    graphQueryEndpoint,
    getPokemonDetailsQuery(id)
  );

  return res;
}
