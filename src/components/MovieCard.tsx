import React from 'react';
import { Movie } from '../../types/Movie';

interface MovieCardProps {
    movie: Movie;
    showRank?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, showRank = false }) => (
    <div className="movie-card">
        <img
            className="movie-card-poster"
            src={movie.posterUrl}
            alt={movie.title}
        />
      <div className = "movie-card-overlay">
            <h3 className = "movie-card-title">{movie.title}</h3>
      </div>
        {showRank && movie.rank && (
            <span className="movie-card-rank">{Movie.rank}</span>
        )}
    </div>
);

