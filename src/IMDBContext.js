import { useState } from "react";
import { createContext } from "react";

const IMDBMoviesContext = createContext({
  //States for Internal Dashboard List View
  moviesData: [],
  serMoviesData: (value) => {},

  searchValue: "",
  setSearchValue: () => {},

  isDataFetching: false,
  setIsDataFetching: () => {},
});

export const IMDBMoviesContextProvider = (props) => {
  const [moviesData, setMoviesData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isDataFetching, setIsDataFetching] = useState(false);

  const setMoviesDataHandler = (value) => {
    setMoviesData(value);
  };

  const setSearchValueHandler = (value) => {
    setSearchValue(value);
  };

  const setIsDataFetchingHandler = (value) => {
    setIsDataFetching(value);
  };

  return (
    <IMDBMoviesContext.Provider
      value={{
        moviesData: moviesData,
        setMoviesData: setMoviesDataHandler,
        searchValue: searchValue,
        setSearchValue: setSearchValueHandler,
        isDataFetching: isDataFetching,
        setIsDataFetching: setIsDataFetchingHandler
      }}
    >
      {props.children}
    </IMDBMoviesContext.Provider>
  );
};

export default IMDBMoviesContext;
