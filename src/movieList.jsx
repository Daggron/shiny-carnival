import React from 'react';
import { MovieContext  } from './movieContext';
import AddMovies from './addMovies';

const MovieList = () =>{
    const [movies] = React.useContext(MovieContext);


    return(
        <React.Fragment>
            <AddMovies/>
            {
                movies.map(movie=>{
                    return(
                        <h1>
                           { movie.name }
                        </h1>
                    )
                })
            }
        </React.Fragment>
    )
}

export default MovieList;