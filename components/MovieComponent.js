import React, { useState, useEffect } from "react"


function Movie() {
    const [movies, setAllMovies] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://ghibliapi.herokuapp.com/films");
        const dataResponse = await response.json();
        console.log(dataResponse);
        setAllMovies(dataResponse);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const sortedMovies = movies.sort((a, b) => b.rt_score - a.rt_score);

    return (
        <div className="movie_list">
            {sortedMovies.map(movie =>
                <article key={movie.id} className="container">
                    <div className="header">
                        <h2><a href="/movie-title"><q>{movie.title}</q></a></h2>
                        <p><span>{movie.release_date}</span></p>
                        <p>
                            <u>Score:</u> <span>{movie.rt_score}</span>
                        </p>
                    </div>
                    <p className="info">

                        {movie.description}
                    </p>
                    <div className="author">
                        <p><u>Director:</u> <a href="/director"><span>{movie.director}</span></a></p>
                        <p><u>Producer</u> <a href="/producer"><span>{movie.producer}</span></a></p>
                    </div>
                </article>
            )}
        </div>
    )
}
export default Movie;