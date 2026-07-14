import React from "react";
import type { Movie } from "../types/Movie";
import  "../styles/MovieCard.css";

interface MovieCardProps {
  movie: Movie;
  showRank?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  showRank = false,
}) => (
  <div className="movie-card">
    <img
      className="movie-card-poster"
      src={movie.posterUrl}
      alt={movie.title}
    />
    <div className="movie-card-overlay">
      <h3 className="movie-card-title">{movie.title}</h3>
    </div>
    {showRank && movie.rank && (
      <span className="movie-card-rank">{movie.rank}</span>
    )}
  </div>
);
