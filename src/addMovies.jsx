import React from 'react';
import { MovieContext } from './movieContext';

export default function AddMovies (){
    const [movies ,setMovies] = React.useContext(MovieContext);
    const [name , setName] = React.useState("");
    const [genre , setGenre] = React.useState("");
    const [price, setPrice] = React.useState("");

    const handleName = (e)=>{
        const nom = e.target.value;
        setName(nom);
    }

    const handleGenre = (e) =>{
        const gen = e.target.value;
        setGenre(gen);
    }

    const handlePrice = (e)=>{
        const pr = e.target.value;
        setPrice(pr);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMovies(prevMovies => [...movies , {name : name , price : price , genre : genre }]);
    }
    return (
        <React.Fragment>
            <form method="POST" onSubmit={handleSubmit}>
                <input type="text" onChange={handleName} />
                <input type="text" onChange={handlePrice} />
                <input type="text" onChange={handleGenre} />
                <button type="submit">
                    Add Movie
                </button>
            </form>
        </React.Fragment>
    )
}