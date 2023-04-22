import { Tooltip } from "@material-tailwind/react";
const MovieCard = (props) => {
  return (
    <>
      <div className="w-64 h-80 rounded-md shadow-2xl bg-[#ffffff14] m-6 flex justify-center items-center flex-col p-2">
        {/* Display movie name with tooltip for long names  */}
        <Tooltip
          content={props?.details?.l}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          className="bg-[#3699ff] p-2 rounded-md"
        >
          <span className="text-white h-[10%] truncate max-w-[200px] text-lg cursor-pointer">
            {props?.details?.l}
          </span>
        </Tooltip>

        {/* Container for Movie poster */}
        <div id="PosterContainer" className="h-[60%] mt-4 flex justify-center">
          <img
            src={props?.details?.i?.imageUrl}
            alt="Poster not found"
            className="h-full shadow-2xl"
          />
        </div>
        <div id="DetailsContainer" className="h-[30%] mt-4 text-sm w-full">
          <div className="w-full flex justify-between px-5 flex-col">
            <span className="flex justify-between">
              {" "}
              <span>IMDB Id : </span>
              <span>{props?.details?.id}</span>
            </span>
            <span className="flex justify-between">
              <span>Rank : </span>
              <span>{props?.details?.rank}</span>
            </span>

            <span className="flex justify-between">
              {" "}
              <span>Release Year : </span>
              <span>{props?.details?.y !== "" || props?.details?.y !== null ? props?.details?.y : "NA"}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
