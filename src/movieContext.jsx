import React from 'react';

export const MovieContext = React.createContext();

export const MovieProvider = (props)=>{
    const [movies , setMovies ] = React.useState([
        {
            "name" : "Harry Potter and the half blood prince",
            "price" : "$12.99",
            "Genre" : "Fantasy"
        },
        {
            "name" : "John Wick Chapter 3 Resurrection",
            "price" : "$10.99",
            "Genre" : "Action"
        },
        {
            "name" : "Lord of the Rings The Return of the king",
            "price" : "$5.99",
            "Genre" : "Fantasy"
        }
    ])
    return(
        <MovieContext.Provider value={[movies , setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}