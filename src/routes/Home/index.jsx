import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import MovieList from "../../components/movieList";

import "./style.scss";

const { Search } = Input;

const Home = () => {
  const loginOk = useSelector((state) => state.loginReducer.login);

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);

  async function getMovies() {
    const response = await fetch("http://localhost:3100/movies");
    const movies = await response.json();
    setMovies(movies);
  }

  const onSearch = (e) => {
    if (e.target.value.length > 3) {
      setKeyword(e.target.value);
      const searchMovies = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterMovies(searchMovies);
    } else if (keyword && !e.target.value) {
      setKeyword("");
    }
  };

  function redirectLogin() {
    return <Redirect to={`/login`} />
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {});

  return (
    <div>
      <div className="flex-end">
        <Search
          placeholder="input search text"
          onChange={onSearch}
          style={{
            width: 200,
            marginRight: "10px",
          }}
        />
        <Button type="primary" onClick={redirectLogin}>
          {loginOk? 'logout': 'login'}
        </Button>
      </div>

      {keyword ? (
        <>
          <MovieList
            list={filterMovies}
            range={`search result for : ${keyword}`}
          />
        </>
      ) : (
        <>
          <MovieList
            list={movies.filter((_, i) => i < 20)}
            range="Top Movie (1 - 20)"
          />
          <MovieList
            list={movies.filter((_, i) => i > 20 && i < 40)}
            range="Top Movie (20 - 40)"
          />
          <MovieList
            list={movies.filter((_, i) => (i > 40) & (i < 80))}
            range="Top Movie (1 - 20)"
          />
        </>
      )}
    </div>
  );
};

export default Home;
