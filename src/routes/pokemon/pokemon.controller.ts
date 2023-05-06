import { Request, Response } from "express";

import pokemonsModel from "../../models/pokemons.model";
import { createError } from "../../utils/utils";

const { getAllPokemonsRequest, getPokemonDetailsRequest } = pokemonsModel;

async function httpGetAllPokemons(req: Request, res: Response) {
  const page = req.query.page ? parseInt(req.query.page as string) : undefined;
  const limit = req.query.limit
    ? parseInt(req.query.limit as string)
    : undefined;

  const gqlRes = await getAllPokemonsRequest(page, limit);

  return res.status(200).json(gqlRes);
}

async function httpGetPokemonDetails(req: Request, res: Response) {
  const pokemonId = req.params.id;

  const gqlRes = await getPokemonDetailsRequest(pokemonId);

  if (gqlRes.pokemon === null) {
    return res.status(400).json(createError("POK0001", "Pokemon not found."));
  }

  return res.status(200).json(gqlRes);
}
export default { httpGetAllPokemons, httpGetPokemonDetails };
