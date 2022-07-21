import {useParams} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Detail() {
    // const x = useParams(); console.log("id:" + id)
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movies);
        setLoading(!loading);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                title={movie.title}
                rating={movie.rating}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </>
    );
}

export default Detail;
