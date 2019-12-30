import React from 'react';
import './App.css';
import { MovieProvider } from './movieContext';
import MovieList from './movieList';

function App() {
  return (
    <div className="App">
     <MovieProvider>
       <MovieList />
     </MovieProvider>
    </div>
  );
}

export default App;
