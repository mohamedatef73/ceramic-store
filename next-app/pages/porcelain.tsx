// // components/PokemonList.js
// "use client"
// import React, { useState, useEffect } from "react"
// import { Pokemon } from "./Pokemon"
// import "../app/globals.css"

// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import RootLayout from "../app/layout"

// const PokemonList = () => {
//   // console.log("porcelain page here")
//   const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
//       const data = await res.json()
//       setPokemonList(data.results)
//     }

//     fetchData()
//   }, [])

//   return (
//     <RootLayout>
//       <div className="container mx-auto mt-8">
//         <h2 className="text-2xl font-bold mb-4">Pokemon List</h2>
//         <ul className="grid grid-cols-2 gap-4">
//           {pokemonList.map((pokemon, index) => (
//             <li key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
//               <span className="text-lg font-medium">{pokemon.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </RootLayout>
//   )
// }

// export default PokemonList

// // // pages/PorcelainFloorProducts.tsx

// // import { useEffect, useState } from "react"

// // type Product = {
// //   id: number
// //   name: string
// //   description: string
// //   price: number
// //   // Add more fields as per your API response
// // }

// // const PorcelainFloorProducts = () => {
// //   const [products, setProducts] = useState<Product[]>([])

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch("/api/porcelain-floor-products") // Replace with your actual API endpoint
// //         if (!response.ok) {
// //           throw new Error("Network response was not ok")
// //         }
// //         const data = await response.json()
// //         setProducts(data) // Assuming your API returns an array of products
// //       } catch (error) {
// //         console.error("Error fetching data:", error)
// //       }
// //     }

// //     fetchData()
// //   }, [])

// //   return (
// //     <div>
// //       <h1>Porcelain Floor Products</h1>
// //       {products.map((product) => (
// //         <div key={product.id}>
// //           <h2>{product.name}</h2>
// //           <p>{product.description}</p>
// //           <p>Price: ${product.price}</p>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default PorcelainFloorProducts
