import type { Movie } from "../types/Movie";
import { MovieCard } from "./MovieCard";
import { DragScroll } from "./shared/DragScroll";
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
  // makes a copy: sort() changes its array, so sorting the copy protects,the original data. Only trending rows are sorted; ?? 0 handles a missing rank.
  const sortedMovies = showRank ? [...movies].sort((a,b) => (a.rank ?? 0) - (b.rank ?? 0)):movies;

  return (

  <section className="movie-row">
    <h2 className="movie-row-title">{title}</h2>
    <DragScroll className="movie-row-scroll" label={`${title} movies`}>
      {/* map creates one card per movie; the unique key helps React track each card. */}
      {sortedMovies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} showRank={showRank} />
      ))}
    </DragScroll>

    <span className="movie-row-drag">Swipe or drag to explore →</span>
  </section>
);
};
