import { movieGenre } from "../data/Movie";
import { GenreBlock } from "./GenreBlock";
import { DragScroll } from "./shared/DragScroll";
import "../styles/GenreBlock.css";

export const GenreSection = () => (
    <section className="genre-section" id="genres">
        <h2 className="genre-section-title">Select Genre</h2>
        <DragScroll className="genre-section-grid" label="Movie genres">

            {movieGenre.map((genre) => (
                <GenreBlock key={genre.id} label={genre.label} color={genre.color} />
            ))}
        </DragScroll>

        <span className="genre-block-drag">Swipe or drag to explore →</span>
    </section>
);
