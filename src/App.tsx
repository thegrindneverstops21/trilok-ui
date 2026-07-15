import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MovieRow } from "./components/MovieRow";
import { Navbar } from "./components/Navbar";
import { heroMovie, latestRelease, topTrending } from "./data/Movie";

export default function App() {
  return (
    <>
      <Navbar />
       <Hero
        movie={heroMovie}
        thumbnails={[heroMovie.backdropUrl]}
      />
      <MovieRow title="Latest Release" movies={latestRelease} />
      <MovieRow title="Top Trending" movies={topTrending} showRank />
      <Footer />
    </>
  );
}
