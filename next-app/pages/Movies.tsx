// "use client"
import { Card } from "flowbite-react"
import { useEffect, useState } from "react"
import RootLayout from "../app/layout"

interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
}

const API_KEY = "eaca9481a1d4aea9e39f912f5f467611" // Replace with your TMDb API key

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
        if (!res.ok) {
          throw new Error("Failed to fetch movies")
        }
        const data = await res.json()
        setMovies(data.results)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>
  }

  if (error) {
    return <div className="container mx-auto p-4">Error: {error}</div>
  }

  return (
    <RootLayout>
      <div className="flex flex-col  justify-around items-center bg-red-500 w-full py-5">
        <h2 className="text-2xl font-bold mb-4">Pokemon List</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-center 
         gap-10 justify-around"
        >
          {movies.map((movie) => (
            <Card
              key={movie.id}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-lg w-96 shadow-md"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-t-lg w-full h-96 object-cover"
              />
              <div className="p-4">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {movie.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">{movie.overview}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </RootLayout>
  )
}
