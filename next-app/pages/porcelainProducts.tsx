import React from "react"
import PokemonList from "../components/PokemonList"
import RootLayout from "../app/layout"

const pokemonList = [
  { name: "bulbasaur" },
  { name: "ivysaur" },
  { name: "venusaur" },
  // Add more Pokémon as needed
]

const HomePage = () => {
  return (
    <RootLayout>
      <PokemonList pokemonList={pokemonList} />
    </RootLayout>
  )
}

