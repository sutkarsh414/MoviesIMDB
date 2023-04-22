import { Tooltip } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import IMDBMoviesContext from "../IMDBContext";

const SearchBar = () => {
  const IMDBctx = useContext(IMDBMoviesContext);

  //   useEffect(()=>{
  //     IMDBctx.setMoviesData([
  //         {
  //             "i": {
  //                 "height": 1500,
  //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
  //                 "width": 1102
  //             },
  //             "id": "tt0944947",
  //             "l": "Game of Thrones",
  //             "q": "TV series",
  //             "qid": "tvSeries",
  //             "rank": 26,
  //             "s": "Emilia Clarke, Peter Dinklage",
  //             "y": 2011,
  //             "yr": "2011-2019"
  //         },
  //         {
  //             "i": {
  //                 "height": 1200,
  //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BNTg1MjEyNWYtNzJkZi00ZTM5LThlNWMtMmNiNmE3N2QxNTllXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
  //                 "width": 782
  //             },
  //             "id": "tt13380510",
  //             "l": "Game of Thrones",
  //             "q": "video",
  //             "qid": "video",
  //             "rank": 12119,
  //             "s": "Roy Dotrice",
  //             "y": 2003
  //         },
  //         {
  //             "i": {
  //                 "height": 1200,
  //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDdlMzQzNDQtNTAxMS00NTMyLTgxYTAtYzQ0OGI1YzZhY2Y3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  //                 "width": 810
  //             },
  //             "id": "tt10090796",
  //             "l": "Game of Thrones: The Last Watch",
  //             "q": "TV movie",
  //             "qid": "tvMovie",
  //             "rank": 24162,
  //             "s": "Kevin Alexander, Alfie Allen",
  //             "y": 2019
  //         },
  //         {
  //             "id": "tt21073266",
  //             "l": "Untitled Jon Snow/Game of Thrones Spinoff",
  //             "q": "TV series",
  //             "qid": "tvSeries",
  //             "rank": 13426,
  //             "s": ""
  //         },
  //         {
  //             "i": {
  //                 "height": 750,
  //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BODg5NDJhMjYtMTYyYi00NzAwLTliNmYtNGZhMjQ4ZjNkMjgyXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg",
  //                 "width": 1334
  //             },
  //             "id": "tt6857128",
  //             "l": "Unaired Game of Thrones Prequel Pilot",
  //             "q": "TV movie",
  //             "qid": "tvMovie",
  //             "rank": 22808,
  //             "s": "Naomi Watts, Denise Gough",
  //             "y": 2019
  //         },
  //         {
  //             "i": {
  //                 "height": 840,
  //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BMGYzNDJiOTgtN2Y1OC00NmM2LTk3MTMtZmFhNmJlMzQzNGNhXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg",
  //                 "width": 600
  //             },
  //             "id": "tt7937220",
  //             "l": "Game of Thrones Conquest & Rebellion: An Animated History of the Seven Kingdoms",
  //             "q": "video",
  //             "qid": "video",
  //             "rank": 24383,
  //             "s": "Pilou Asbæk, Nikolaj Coster-Waldau",
  //             "y": 2017
  //         },
  //         {
  //             "i": {
  //                 "height": 1330,
  //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BMzc3M2U2NzAtMmY1MS00NWYwLWFmMzctYzE2NWEyODYxNTk4XkEyXkFqcGdeQXVyMzIzNzE4Njk@._V1_.jpg",
  //                 "width": 1021
  //             },
  //             "id": "tt6411748",
  //             "l": "Purge of Kingdoms",
  //             "q": "feature",
  //             "qid": "movie",
  //             "rank": 41497,
  //             "s": "Angus Macfadyen, Lou Ferrigno",
  //             "y": 2019
  //         },
  //         {
  //             "i": {
  //                 "height": 1500,
  //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
  //                 "width": 1013
  //             },
  //             "id": "tt11198330",
  //             "l": "House of the Dragon",
  //             "q": "TV series",
  //             "qid": "tvSeries",
  //             "rank": 119,
  //             "s": "Matt Smith, Graham McTavish",
  //             "y": 2022
  //         }
  //     ])
  //   },[])

  const SearchData = () => {
    if (IMDBctx.searchValue !== "") {
      IMDBctx.setMoviesData([]);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "df7e345e41mshe1f9b48d12cac66p1b090bjsnc7bc3719b888",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      fetch(
        "https://imdb8.p.rapidapi.com/auto-complete?q=" + IMDBctx.searchValue,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          IMDBctx.setMoviesData(response.d);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    console.log(IMDBctx.searchValue);
  }, [IMDBctx.searchValue, IMDBctx]);

  return (
    <>
      <div className=" bg-white rounded-2xl flex justify-between text-lg relative">
        <input
          className="relative rounded-2xl focus:outline-0 text-black text-center"
          placeholder="Movie Name"
          value={IMDBctx.searchValue}
          onChange={(e) => {
            IMDBctx.setSearchValue(e.target.value);
          }}
        ></input>
                <Tooltip
          content="Search Movie"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          className="bg-[#3699ff] p-2 rounded-md"
        >
        <button
        className="mx-2"
          onClick={() => {
            SearchData();
          }}
        >
          <FaSearch color="#000"/>
        </button>
        </Tooltip>

      </div>
    </>
  );
};

export default SearchBar;
