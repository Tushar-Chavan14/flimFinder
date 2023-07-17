import { useState } from "react";
import SearchBar from "../components/search bar/SearchBar";
import { useStore } from "../store/zusStore";
import MovieDetails from "../components/movieDetails/movieDetails";

const Searchpage = () => {
  const handleSubmit = useStore((state) => state.handleSubmit);
  const data = useStore((state) => state.data);
  const error = useStore((state) => state.error);

  const [title, settitle] = useState("");

  return (
    <div className="p-8">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSubmit(title);
          settitle("");
        }}
      >
        <SearchBar title={title} setTitle={settitle} />
      </form>
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl max-h-max">
          {data ? (
            <MovieDetails data={data} />
          ) : error ? (
            <div className="w-full rounded-lg border-2 border-dashed border-gray-300 p-28 text-center">
              <span className="mt-2 block text-sm font-semibold text-red-600">
                {error}
              </span>
            </div>
          ) : (
            <div className="w-full rounded-lg border-2 border-dashed border-gray-300 p-28 text-center">
              <span className="mt-2 block text-sm font-semibold text-gray-900">
                Search a movie with title to knows ratings and other details
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
