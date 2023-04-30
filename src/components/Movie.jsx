import React from 'react'

const Movie = (movie) => {
  return (
    <div className="border my-10 border-y-neutral-900 p-4  text-center m-auto flex flex-col m-auto flex flex-col mx-6 shadow-lg bg-zinc-900 text-white">
        <h1 className="underline text-xl">Episode {movie.episode_id}</h1>
      <h1 className="decoration-double underline text-2xl p-5">{movie.title}</h1>
      <h2>{movie.release_date}</h2>
      <p>{movie.opening_crawl}</p>

    </div>
  )
}

export default Movie;
