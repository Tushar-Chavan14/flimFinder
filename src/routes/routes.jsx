import { Routes, Route } from "react-router-dom";
import Searchpage from "../pages/Searchpage";
import Ui from "../components/Ui/Ui";
import WatchList from "../pages/watchList";

export const AppRoutes = () => {
  return (
    <Ui>
      <Routes>
        <Route exact path="/" element={<Searchpage />} />
        <Route exact path="/watchlist" element={<WatchList />} />
      </Routes>
    </Ui>
  );
};
