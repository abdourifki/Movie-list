import React from 'react';
import MovieList from './Components/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trailer from './Components/Trailer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/trailer/1" element={<Trailer movieId={1} />} />
        <Route path="/trailer/2" element={<Trailer movieId={2} />} />
        <Route path="/trailer/3" element={<Trailer movieId={3} />} />
        <Route path="/trailer/4" element={<Trailer movieId={4} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
