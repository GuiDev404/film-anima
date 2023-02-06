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
  { title: "Peliculas en tendencia", link: "/movies", section: [], size: "lg", },
  { title: "Peliculas mas valoradas", link: "/movies", section: [] },
  { title: "Series en tendencia", link: "/series", section: [] },
  { title: "Series mas valoradas", link: "/series", section: [] },
];

export const CARD_SIZES = {
  sm: { h: "250px", maxW: "170px" },
  md: { h: "300px", maxW: "210px" },
  lg: { h: "375px", maxW: "285px" },
};