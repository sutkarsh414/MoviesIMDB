import { useContext, useEffect } from "react";
import MovieCard from "./MovieCard";
import IMDBMoviesContext from "../IMDBContext";
import EmptyAnimation from "./EmptyAnimation";
import NoDataFound from "../../src/Assets/NoDataFound.json"

const MovieCardsContainer = () => {
  const IMDBctx = useContext(IMDBMoviesContext);
  useEffect(() => {
    console.log("Data", IMDBctx.moviesData);
  }, [IMDBctx.moviesData]);

  return (
    <>
      <div className="w-full relative mt-10 flex flex-wrap justify-center">
        {IMDBctx.moviesData.length !== 0 ? (
          <>
            {IMDBctx.moviesData.map((x) => {
              return (
                <>
                  <MovieCard details={x} />
                </>
              );
            })}
          </>
        ) : (
            <p className="flex justify-center h-64 w-64 flex-col mt-10">
              <EmptyAnimation animationData={NoDataFound} isLoop={true} />
              <span>No data found.</span>
            </p>
        )}
      </div>
    </>
  );
};

export default MovieCardsContainer;
