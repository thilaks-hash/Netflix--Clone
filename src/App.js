import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./components/Player";
import TVShows from "./pages/TVShows";
import PopularMovie from "./pages/PopularMovie";
import Subscription from "./components/Subscription";
import MovieContent from "./pages/MovieContent";
import Mylist from "./pages/Mylist";
import { SearchProvider } from "./utils/SearchContext";
import SearchResults from "./components/SearchResults";
import UserProfilePage from "./pages/UserProfile";
import UpdatePassword from "./components/UpdatePassword";
import UpdatePasswordForm from "./components/UpdatePassword";
const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/tv" element={<TVShows />} />
          <Route exact path="/movies" element={<PopularMovie />} />
          <Route exact path="/subscription" element={<Subscription />} />
          <Route
            exact
            path="/moviecontent/:movieId"
            element={<MovieContent />}
          />
          <Route exact path="/mylist" element={<Mylist />} />
          <Route exact path="/search" element={<SearchResults />} />
          <Route exact path="/userprofile" element={<UserProfilePage />} />
          <Route exact path="/updatepassword" element={<UpdatePassword />} />
          <Route exact path="/netflix" element={<Netflix />} />
          <Route
            exact
            path="/updatepassword"
            element={<UpdatePasswordForm />}
          />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
};
export default App;
