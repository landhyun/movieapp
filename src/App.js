import React, { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => { 
        /* const json 선언 과정
        const response = await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
        const json = await response.json();
        */
        
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
        setMovies(json.data.movies);
        setLoading(!loading);
    }
    useEffect(() => { getMovies(); }, []);
    
    /* useEffect()를 이용한 api 호출
    useEffect(() => {
        fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        )
          .then((response) => response.json())
          .then((json) => {
            setMovies(json.data.movies);
            setLoading(!loading);
          });
    }, [])
    */
    
    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                <img key={movie.id} src={movie.medium_cover_image} />
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                    <p>{movie.summary}</p>   
                    <ul>
                        {movie.genres.map((gen) => (<li key={gen}>{gen}</li>))}
                    </ul>    
              </div>
            ))}
          </div>
        )}
      </>
    );
}

export default App;