import { useState } from "react";
import type { Movie } from "../types/Movie";
import { TrailerModal } from "../components/shared/TrailerModal";
import "../styles/Hero.css";
import { IconButton } from "./shared/IconButton";

interface HeroProp {
  movie: Movie;
  thumbnails: string[];
}

export const Hero = ({ movie, thumbnails }: HeroProp) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const shortDesc = movie.description.slice(0, 90);

  return (
    <section className="hero">
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
          {movie.year} • {movie.runtime} • {movie.genre.join(" & ")}
        </p>

        <p className="hero-description">
          {showDescription ? movie.description : shortDesc}
          {!showDescription && (
            <button
              className="hero-more-btn"
              onClick={() => setShowDescription(true)}
            >
              ...more
            </button>
          )}
        </p>

        <div className="hero-nav-arrows">
          <IconButton variant="round" icon="→" />
          <IconButton variant="round" icon="←" />
        </div>

        <div className="hero-play">
          <button className="hero-play-btn" onClick={() => setIsPlaying(true)}>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <polygon points="6,4 20,12 6,20" fill="white" />
            </svg>
          </button>
          <span className="hero-stream-label">Streaming Now</span>
        </div>

        
      </div>

      {isPlaying && movie.trailerUrl && (
        <TrailerModal
          videoSrc={movie.trailerUrl}
          onClose={() => setIsPlaying(false)}
        />
      )}
    </section>
  );
};
