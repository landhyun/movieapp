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
    
    console.log(movies);
    return (
        <>
            {loading ? <h1>Loading...</h1> : null}
        </>
    );
}

export default App;