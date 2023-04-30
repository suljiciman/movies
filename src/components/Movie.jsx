import React from 'react'

const Movie = (movie) => {
  return (
    <div className="border m-14 ">
        <h1 className="">Episode {movie.episode_id}</h1>
      <h1>{movie.title}</h1>
      <h2>{movie.release_date}</h2>
      <p>{movie.opening_crawl}</p>

    </div>
  )
}

export default Movie;
