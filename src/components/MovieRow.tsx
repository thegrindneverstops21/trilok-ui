import type { Movie } from "../types/Movie";
import { MovieCard } from "./MovieCard";
import "../styles/MovieRow.css";

interface MovieRowProp {
  title: string;
  movies: Movie[];
  showRank?: boolean;
}

export const MovieRow = ({
  title,
  movies,
  showRank = false,
}: MovieRowProp ) => {
  const sortedMovies = showRank ? [...movies].sort((a,b) => (a.rank ?? 0) - (b.rank ?? 0)):movies;

  return (

  <section className="movie-row">
    <h2 className="movie-row-title">{title}</h2>
    <div className="movie-row-scroll">
      {sortedMovies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} showRank={showRank} />
      ))}
    </div>       

    <span className="movie-row-drag">DRAG TO NEXT → </span>
  </section>
);
};
