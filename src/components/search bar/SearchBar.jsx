import { useEffect, useRef } from "react";

export default function SearchBar({ title, setTitle }) {
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        searchBarRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium leading-6 text-gray-900 text-center"
      >
        Search A Movie By Its's Title
      </label>
      <div className="flex w-full justify-center">
        <div className="relative mt-2 flex items-center">
          <input
            ref={searchBarRef}
            type="text"
            autoComplete="off"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 md:focus:w-[37rem] transition-all focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
              Ctrl K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
