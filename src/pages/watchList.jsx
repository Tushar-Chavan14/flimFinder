import React from "react";
import Card from "../components/card/card";
import { useWatchListStore } from "../store/zusStore";

const WatchList = () => {
  const watchList = useWatchListStore((store) => store.watchList);
  return (
    <div className=" flex justify-center items-center w-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-4 sm:py-12 lg:max-w-full lg:px-40">
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {watchList.length !== 0 ? (
            watchList.map((movie) => <Card key={movie.imdbID} movie={movie} />)
          ) : (
            <p className="text-center">No watchList found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
