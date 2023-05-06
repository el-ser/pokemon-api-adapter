import { gql } from "graphql-request";

export const getAllPokemonsQuery = () => {
  return gql`
    {
      pokemons(first: 200) {
        id
        number
        name
        image
        classification
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
      }
    }
  `;
};

export const getPokemonDetailsQuery = (id: string) => {
  return gql`
    {
      pokemon(id: "${id}") {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification

        types
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        resistant
        fleeRate
        maxCP
        maxHP
        image
        weaknesses
        evolutionRequirements {
          amount
          name
        }
      }
    }
  `;
};
