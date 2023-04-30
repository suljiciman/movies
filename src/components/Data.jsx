import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner';
import Movie from './Movie';
const Data = () => {
    const[movies,setMovies] = useState([]);
    const[status,setStatus] = useState(false);

    useEffect(() => {
        axios
        .get("https://swapi.dev/api/films")
        .then((res) => {        
          setMovies(res.data.results);
          setStatus(true);
        })
        .catch((err) => {
            console.log(err);
          });
      }, []);

  return (
    <div>
      <ul>
        {status ? (
          movies.map((movie) => <li> <Movie key={movie.episode_id} title={movie.title} release_date={movie.release_date} episode_id={movie.episode_id} opening_crawl={movie.opening_crawl}/> </li>)
        ) : (
          <LoadingSpinner />
        )}
        </ul>
    </div>
  )
};

export default Data
