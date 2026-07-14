import { useState } from 'react';
import { Movie } from '../../types/Movie';
import { IconButton } from '../shared/IconButton';
import { TrailerModal } from '../shared/TrailerModal';
import './Hero.css';

interface HeroProps {
  movie: Movie;
  thumbnails: string[]; // small preview poster URLs for the strip
}

export const Hero = ({ movie, thumbnails }: HeroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const shortDescription = movie.description.slice(0, 90);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${movie.backdropUrl})` }}
    >
      <div className="hero__overlay" />

      <div className="hero__content container">
        <p className="hero__presents">Star Fox Entertainment Presents</p>
        <p className="hero__tagline">Beder Meye</p>
        <h1 className="hero__title">{movie.title}</h1>

        <p className="hero__meta">
          {movie.year} • {movie.runtime} • {movie.language} • {movie.genre.join('/')}
        </p>

        <p className="hero__description">
          {showFullDescription ? movie.description : shortDescription}
          {!showFullDescription && (
            <button
              className="hero__more-btn"
              onClick={() => setShowFullDescription(true)}
            >
              ...more
            </button>
          )}
        </p>

        <div className="hero__play-row">
          <button className="hero__play-btn" onClick={() => setIsPlaying(true)}>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <polygon points="6,4 20,12 6,20" fill="white" />
            </svg>
          </button>
          <span className="hero__streaming-label">Streaming Now</span>
        </div>

        <div className="hero__nav-arrows">
          <IconButton variant="round" icon="←" />
          <IconButton variant="round" icon="→" />
        </div>
      </div>

      <div className="hero__thumbnails">
        {thumbnails.map((thumb, i) => (
          <img key={i} src={thumb} alt="" className="hero__thumbnail" />
        ))}
      </div>

      {isPlaying && movie.trailerUrl && (
        <TrailerModal videoSrc={movie.trailerUrl} onClose={() => setIsPlaying(false)} />
      )}
    </section>
  );
};