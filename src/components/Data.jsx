import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner';

const Data = () => {
    const[movies,setMovies] = useState([]);
    const[status,setStatus] = useState(false);

    useEffect(() => {
        axios
        .get("https://swapi.dev/api/films")
        .then((res) => {
          console.log(res.data.results);
          setMovies(res.data.results);
          setStatus(true);
        })
        .catch((err) => {
            console.log(err);
          });
      }, []);

  return (
    <div>
      <ul className="screen">

        {status ? (
          movies.map((movie) => <li key={movie.episode_id}> {movie.title} </li>)
        ) : (
          <LoadingSpinner />
        )}
        </ul>
    </div>
  )
};

export default Data
