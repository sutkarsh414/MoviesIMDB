import { useContext, useEffect } from "react";
import MovieCard from "./MovieCard";
import IMDBMoviesContext from "../IMDBContext";

const MovieCardsContainer = () => {
  const IMDBctx = useContext(IMDBMoviesContext);
  useEffect(()=>{
    console.log("Data",IMDBctx.moviesData)
  },[IMDBctx.moviesData])

  return (
    <>
      <div className="w-full px-28 relative mt-10 flex flex-wrap">
        {IMDBctx.moviesData.map((x) => {
          return (
            <>
              <MovieCard details={x} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MovieCardsContainer;
