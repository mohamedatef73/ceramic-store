// components/PokemonList.tsx
import React from "react"
import { Card } from "flowbite-react"

const PokemonList = ({ pokemonList }: { pokemonList: { name: string }[] }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* <h2 className="text-2xl font-bold mb-4">Pokemon List</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {pokemonList.map((pokemon, index) => (
          <Card key={index} className="w-full">
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <span className="text-lg font-medium capitalize leading-extra-loose">
                {pokemon.name}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PokemonList
