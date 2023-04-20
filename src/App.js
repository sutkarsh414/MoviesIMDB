import "./App.css";
import MovieCardsContainer from "./Components/MovieCardsContainer";
import SearchBar from "./Components/SearchBar";
import { IMDBMoviesContextProvider } from "./IMDBContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-col mt-16 absolute w-full h-full align-middle items-center">
          <IMDBMoviesContextProvider>
            <SearchBar />
            <MovieCardsContainer />
          </IMDBMoviesContextProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
