import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResultMovies from "./components/ResultMovies";
import ResultsSearch from "./components/ResultsSearch";

import Details from "./pages/Details";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Series from "./pages/Series";
import ResultSeries from "./components/ResultSeries";

function App() {
  return (
    <>
      <Navbar />

      <Container maxW="container.xl">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="movies" element={<Movies />}>
            <Route index element={<ResultMovies />} />
            <Route
              path="search/:keyword"
              element={<ResultsSearch />}
            />
          </Route>

          <Route path="movies/:id" element={<Details />} />

          <Route path="series" element={<Series />}>
            <Route index element={<ResultSeries />} />
            <Route
              path="search/:keyword"
              element={<ResultsSearch />}
            />
          </Route>

          <Route path="series/:id" element={<Details />} /> 

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
