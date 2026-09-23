import { useState } from "react";
import type { Movie } from "../types/Movie";
import { TrailerModal } from "../components/shared/TrailerModal";
import "../styles/Hero.css";
import { IconButton } from "./shared/IconButton";

// Props describe the movie and preview images that the parent passes to this component.
interface HeroProp {
  movie: Movie;
  thumbnails: string[];
}

export const Hero = ({ movie, thumbnails }: HeroProp) => {
  // These state values control the trailer popup and the expanded description separately.
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  // Keep long descriptions compact until the viewer clicks "more".
  const shortDesc = movie.description.slice(0, 90);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="hero-bg-img"
        />

        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <p className="hero-presents">Angel Studios Present</p>
        <p className="hero-tag">Dallas Jenkins</p>
        <h1 className="hero-title">{movie.title}</h1>

        <p className="hero-meta">
          {movie.year} • {movie.runtime} • {movie.language} • {movie.genre.join(" / ")}
        </p>

        <p className="hero-description">
          {showDescription ? movie.description : shortDesc}
          {!showDescription && movie.description.length > 90 && (
            <button
              className="hero-more-btn"
              onClick={() => setShowDescription(true)}
            >
              ...more
            </button>
          )}
        </p>

        <div className="hero-play">
          <button className="hero-play-btn" aria-label={`Play ${movie.title} trailer`} onClick={() => setIsPlaying(true)}>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <polygon points="6,4 20,12 6,20" fill="white" />
            </svg>
          </button>
          <span className="hero-stream-label">Streaming Now</span>
        </div>
        <div className="hero-nav-arrows">
          <IconButton variant="round" icon="arrow-left" ariaLabel="Previous" />
          <IconButton variant="round" icon="arrow-right" ariaLabel="Next" />
        </div>
      </div>
      <div className="hero-thumbnails">
        {thumbnails.map((thumb, i) => (
          <img key={i} src={thumb} alt="" className="hero-thumbnail" />
        ))}
      </div>

      {/* Open the popup only when Play was clicked and a trailer URL exists. */}
      {isPlaying && movie.trailerUrl && (
        <TrailerModal
          videoSrc={movie.trailerUrl}
          onClose={() => setIsPlaying(false)}
        />
      )}
    </section>
  );
};
