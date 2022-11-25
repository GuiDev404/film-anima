import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../components/Search";

const Series = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
};

export default Series;
