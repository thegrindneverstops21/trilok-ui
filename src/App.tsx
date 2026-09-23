import { Footer } from "./components/Footer";
import { GenreSection } from "./components/GenreSection";
import { Hero } from "./components/Hero";
import { MovieRow } from "./components/MovieRow";
import { Navbar } from "./components/Navbar";
import { heroMovie, latestRelease, topTrending } from "./data/Movie";
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App() {
  // Pick preview images from the movie lists. Optional chaining (?.) handles missing items, and filter(Boolean) removes any missing image URLs before they reach the Hero.
  const heroThumbnails = [
    latestRelease[0]?.posterUrl,
    latestRelease[1]?.posterUrl,
    topTrending[0]?.posterUrl,
    topTrending[1]?.posterUrl,
  ].filter(Boolean) as string[];

  return (
    <div className='app'>
      <Navbar />
      <Hero
        movie={heroMovie}
        thumbnails={heroThumbnails}
      />
      <main className="container" id="movies">
        <MovieRow title="Latest Release" movies={latestRelease} />
        <MovieRow title="Top Trending" movies={topTrending} showRank />
        <GenreSection />
      </main>
      <Footer />
    </div>
  );
}
