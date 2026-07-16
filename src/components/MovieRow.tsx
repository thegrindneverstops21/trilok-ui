import type { Movie } from "../types/Movie";
import { MovieCard } from "./MovieCard";
import "../styles/MovieRow.css";

interface MovieRowProp {
  title: string;
  movies: Movie[];
  showRank?: boolean;
}

export const MovieRow: React.FC<MovieRowProp> = ({
  title,
  movies,
  showRank = false,
}) => (
  <section className="movie-row">
    <div className="movie-row-left">
      <h2 className="movie-row-title">{title}</h2>
      <span className="movie-row-drag">DRAG TO NEXT → </span>
    </div>
    <div className="movie-row-scroll">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} showRank={showRank} />
      ))}
    </div>
  </section>
);
