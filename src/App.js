import './App.css';
import {data} from './data';
import { useState } from 'react';
import MovieList from './components/movieList';
import Filter from './components/filter';
import Desc from './components/desc';
import {Routes} from 'react-router-dom';
import {Route,Router} from 'react-router-dom';

function App() {
  const  [movies, setMovies] = useState(data);
  const [titler, setTitler] = useState("");
  const [rater, setRater] = useState(0)


  const ChangeTitle = (e) => {
    setTitler(e.target.value);
  };
  const ChangeRate = (newRating) => {
    setRater(newRating)
  
  };
  const AddMovie = (newFilm) => {
    setMovies([...movies, newFilm]);
    console.log(movies);
  };
  return (
    <><Routes>
   
    
   <Route
    path='/Gedeon/hooks.git'
    element={<div>
      <Filter ChangeTitle={ChangeTitle} titlee={titler} ChangeRate={ChangeRate} AddMovie={AddMovie} />

      <MovieList
        movies={movies.filter((movie) => movie.title.trim().toLowerCase().includes(titler.trim().toLowerCase()) && movie.rate >= rater
        )} />
    </div>} />
    
    <Route
    path='/'
    element={<div>
      <Filter ChangeTitle={ChangeTitle} titlee={titler} ChangeRate={ChangeRate} AddMovie={AddMovie} />

      <MovieList
        movies={movies.filter((movie) => movie.title.trim().toLowerCase().includes(titler.trim().toLowerCase()) && movie.rate >= rater
        )} />
    </div>} />
      <Route path='/Desc/:id' element={<Desc movies={movies} />} />
    </Routes></>
  );
}

export default App;
