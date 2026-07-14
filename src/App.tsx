import { MovieRow } from "./components/MovieRow";
import { latestRelease, topTrending } from "./data/Movie";


export default function App(){
  return(
   <>
    <MovieRow title="Latest Release" movies={latestRelease} />
    <MovieRow title="Top Trending" movies={topTrending} showRank />
   </> 
  )
}