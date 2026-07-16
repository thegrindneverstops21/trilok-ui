import { Footer } from "./components/Footer";
import { GenreSection } from "./components/GenreSection";
import { Hero } from "./components/Hero";
import { MovieRow } from "./components/MovieRow";
import { Navbar } from "./components/Navbar";
import { heroMovie, latestRelease, topTrending } from "./data/Movie";
import './index.css';

export default function App() {
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
      <div>
        <MovieRow title="Latest Release" movies={latestRelease} />
        <MovieRow title="Top Trending" movies={topTrending} showRank />
        <GenreSection />
      </div>
      <Footer />
    </div>
  );
}
