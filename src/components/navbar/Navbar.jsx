import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useWatchListStore } from "../../store/zusStore";

export default function Navbar() {
  const location = useLocation();

  const deleteAll = useWatchListStore((state) => state.deleteAll);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link to="/">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-auto"
                      src="https://img.icons8.com/color-glass/48/movie-projector.png"
                      alt="Your Company"
                    />
                  </div>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center"></div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {location.pathname === "/watchlist" && (
                    <button
                      onClick={deleteAll}
                      className="rounded-sm px-3 py-2 text-sm bg-red-800 font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Clear all
                    </button>
                  )}
                  <Link
                    to="/watchlist"
                    className="rounded-md px-3 py-2 text-sm bg-slate-50/10 font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Watchlist
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

              {location.pathname === "/watchlist" && (
                <Disclosure.Button
                  onClick={deleteAll}
                  className="rounded-sm px-3 py-2 text-sm bg-red-800 font-medium text-gray-30 hover:text-white"
                >
                  Clear all
                </Disclosure.Button>
              )}

              <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <Link
                  to="/watchlist"
                  className="rounded-md px-3 py-2 text-sm bg-slate-50/10 font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Watchlist
                </Link>
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
