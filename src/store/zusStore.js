import { create } from "zustand";
import axios from "axios";
import { produce } from "immer";
import { persist } from "zustand/middleware";

const apiUri = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

const watchListStore = (set, get) => ({
  watchList: [],
  addWatchList: (data) => {
    const watchList = get().watchList;

    const isWatchListed = watchList.some(
      (movie) => movie.imdbID === data.imdbID
    );
    
    if (isWatchListed) return;

    set(
      produce((store) => {
        store.watchList.push(data);
      })
    );
  },
  removeWatchlist: (id) => {
    set((state) => ({
      watchList: state.watchList.filter((movie) => movie.imdbID !== id),
    }));
  },
  deleteAll: (e) => {
    e.preventDefault();
    set((state) => ({ watchList: [] }));
  },
});

const store = (set) => ({
  data: null,
  error: "",
  handleSubmit: async (title) => {
    const { data } = await axios.get(apiUri + `&t=${title}`);

    if (data.Error) {
      set((state) => ({ error: data.Error }));
      return;
    }

    set((store) => (store.data = data));
  },
});

export const useWatchListStore = create(
  persist(watchListStore, { name: "watchList" })
);
export const useStore = create(store);
