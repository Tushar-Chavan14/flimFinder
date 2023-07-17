import React from "react";
import { useWatchListStore } from "../../store/zusStore";

const Card = ({ movie }) => {
  const removeWatchlist = useWatchListStore((state) => state.removeWatchlist);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-80 bg-black">
        <img
          className=" h-full w-full object-cover"
          src={movie.Poster}
          alt={movie.Title}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.Title}
        </h5>
        <p className="mt-2 text-sm text-gray-500">
          Released {movie.Released} (Runtime {movie.Runtime})
        </p>
        <div className=" text-gray-200">
          <ul role="list">
            <li>Actors :{movie.Actors}</li>
            <li>Awards :{movie.Awards}</li>
            <li>Box Office :{movie.BoxOffice}</li>
          </ul>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault;
            removeWatchlist(movie.imdbID);
          }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Remove Movie
        </button>
      </div>
    </div>
  );
};

export default Card;
