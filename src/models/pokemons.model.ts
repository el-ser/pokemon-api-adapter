import { getAllPokemonsGQL, getPokemonDetailsGQL } from "../services/graphql";
import { verifyDatabase } from "../services/postgres";
import { paginateResult } from "../utils/utils";

async function getAllPokemonsRequest(
  page: number | undefined = 1,
  limit: number | undefined = 10
) {
  const result = await getAllPokemonsGQL();

  return paginateResult(result.pokemons, page, limit);
}

async function getPokemonDetailsRequest(id: string) {
  const res = await getPokemonDetailsGQL(id);

  if (!res.pokemon) {
    return res;
  }

  const verifyResult = await verifyDatabase(res);
  console.log(verifyResult);
  return res;
}

export default {
  getAllPokemonsRequest,
  getPokemonDetailsRequest,
};
