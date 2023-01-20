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
  { title: "Trending movies", link: "/movies", section: [], size: "lg", },
  { title: "Top Rated Movies", link: "/movies", section: [] },
  { title: "Trending TV", link: "/series", section: [] },
  { title: "Top Rated TV", link: "/series", section: [] },
];

export const CARD_SIZES = {
  sm: { h: "250px", maxW: "170px" },
  md: { h: "300px", maxW: "210px" },
  lg: { h: "375px", maxW: "285px" },
};