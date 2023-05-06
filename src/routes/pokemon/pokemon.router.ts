import express from "express";
import pokemonsController from "./pokemon.controller";

const { httpGetAllPokemons, httpGetPokemonDetails } = pokemonsController;
const pokemonRouter = express.Router();

pokemonRouter.get("/", httpGetAllPokemons);
pokemonRouter.get("/:id", httpGetPokemonDetails);

export default { pokemonRouter };
