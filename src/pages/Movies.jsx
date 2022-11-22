import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Search from "../components/Search";
import SearchResults from "./Results";

const Movies = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
};

export default Movies;
