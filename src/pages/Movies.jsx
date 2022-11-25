import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../components/Search";

const Movies = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
};

export default Movies;
