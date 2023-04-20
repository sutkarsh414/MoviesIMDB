import { useState } from "react";
import { createContext } from "react";

const IMDBMoviesContext = createContext({
  //States for Internal Dashboard List View
  moviesData: [],
  serMoviesData: (value) => {},

  searchValue: "",
  setSearchValue:()=>{}
 
});

export const IMDBMoviesContextProvider = (props) => {
  const [moviesData, setMoviesData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const setMoviesDataHandler = (value)=>{
    setMoviesData(value)
  }

  const setSearchValueHandler = (value)=>{
    setSearchValue(value)
  }
  
  return (
    <IMDBMoviesContext.Provider
      value={{
        moviesData: moviesData,
        setMoviesData: setMoviesDataHandler,
        searchValue: searchValue,
        setSearchValue: setSearchValueHandler
      }}
    >
      {props.children}
    </IMDBMoviesContext.Provider>
  );
};

export default IMDBMoviesContext;
