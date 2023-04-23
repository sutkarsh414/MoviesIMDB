import { useContext, useEffect } from "react";
import MovieCard from "./MovieCard";
import IMDBMoviesContext from "../IMDBContext";
import EmptyAnimation from "./EmptyAnimation";
import NoDataFound from "../../src/Assets/NoDataFound.json";
import SearchingAnimation from "../../src/Assets/SearchingAnimation.json"

const MovieCardsContainer = () => {
  const IMDBctx = useContext(IMDBMoviesContext);

  return (
    <>
      <div className="w-full relative mt-10 flex flex-wrap justify-center">
        {IMDBctx.moviesData.length === 0 ? (
          IMDBctx.isDataFetching ? (
            <p className="flex justify-center h-64 w-64 flex-col mt-10">
              <EmptyAnimation animationData={SearchingAnimation} isLoop={false} />
              {/* <span>No data found.</span> */}
            </p>
          ) : (
            <p className="flex justify-center h-64 w-64 flex-col mt-10">
              <EmptyAnimation animationData={NoDataFound} isLoop={false} />
              <span>No data found.</span>
            </p>
          )
        ) : (
          <>
            {IMDBctx.moviesData.map((x) => {
              return (
                <>
                  <MovieCard details={x} />
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default MovieCardsContainer;
