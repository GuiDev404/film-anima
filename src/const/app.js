import { HOME_SECTIONS } from "../const/api";

export const BEFORE_HEADER = {
  content: '""',
  position: "absolute",
  top: "-5px",
  left: 0,
  width: "100%",
  minHeight: "98vh",
  filter: "contrast(100%)",
  boxShadow: "none",
  zIndex: -1,
  opacity: 0.6,
};

export const SECTIONS = [
  {
    title: "Trending movies",
    link: "/movies",
    urlToFetch: HOME_SECTIONS[0],
    size: "lg",
  },
  { title: "Top Rated Movies", link: "/movies", urlToFetch: HOME_SECTIONS[1] },
  { title: "Trending TV", link: "/series", urlToFetch: HOME_SECTIONS[2] },
  { title: "Top Rated TV", link: "/series", urlToFetch: HOME_SECTIONS[3] },
];

export const SIZES = {
  sm: { h: "250px", maxW: "200px" },
  md: { h: "300px", maxW: "210px" },
  lg: { h: "375px", maxW: "285px" },
};
