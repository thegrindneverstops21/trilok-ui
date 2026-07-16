import { movieGenre } from "../data/Movie";
import { GenreBlock } from "./GenreBlock";

export const GenreSection = () => (
    <section className="genre-section">
        <div className="genre-section-grid">
            <h2 className="genre-section-title">Select Genre</h2>

            {movieGenre.map((genre) => (
                <GenreBlock key={genre.id} label={genre.label} color={genre.color} />
            ))}
        </div>

        <span className="genre-block-drag">DRAG TO NEXT →</span>
    </section>
);