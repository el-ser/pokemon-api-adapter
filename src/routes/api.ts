import express from "express";

import router from "./pokemon/pokemon.router";

const { pokemonRouter } = router;
const api = express.Router();

api.use("/pokemon", pokemonRouter);

export default { api };
