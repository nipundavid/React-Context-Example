import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieList from "./ContextDemo/MovieList";
import { MovieProvider } from "./ContextDemo/MovieContext";

function App() {
  return (
    <div className="App">
      {/* Context Demo */}
      <MovieProvider>
        <MovieList> </MovieList>
      </MovieProvider>
    </div>
  );
}

export default App;
