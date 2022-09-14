import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import MoviesDetails from "./pages/MoviesDetails";
import { getData } from "./utiles/fetching";
import Loader from "./componentes/Loader";
import { useQuery } from "./utiles/queryHook";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHashMore] = useState(true);

  const query = useQuery();
  let search = query.get("searchs");

  useEffect(() => {
    const searchUrl = search
      ? "/search/movie/?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    getData(searchUrl)
      .then((res) => res.json())
      .then((datos) => {
        setMovie((prevMovies) => prevMovies.concat(datos.results));
        setHashMore(datos.page < datos.total_pages);
      });
  }, [search, page]);

  return (
    <div>
      <Header
        setHashMore={setHashMore}
        Page={setPage}
        setMovie={setMovie}
        searchs={search}
        page={page}
      />
      <InfiniteScroll
        dataLength={movie.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Loader />}
      >
        <Routes>
          <Route path="/" element={<Main key={search} datos={movie} />} />
          <Route
            path="movie/descripcion/:movieId"
            element={<MoviesDetails />}
          />
        </Routes>
      </InfiniteScroll>
    </div>
  );
}

export default App;
