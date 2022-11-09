import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moives, setMovies] = useState([]);
  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json(); // json 파일을 자바스크립트 객체로 변환시켜주는 메소드
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
    // @ fetch api, 사용자가 전달하려는 url주소를 문자열로 전달
    // HTTP 요청은 비동기 작업, 즉시 완료되는 작업이 아님
    // then < 응답을 받을때 호출하는 함수
    // catch < 잠재적 오류 처리 함수

    // api는 데이터를 json형식으로 전송함

    // 1.url에서 data를 받아온다
    // 2.받아오면 해당 응답을 자바스크립트 객체로 변환시킨다(then(response.json()))
    // 3.변환시키면 해당 데이터를 map 메소드를 통해 새로운 객체로 변환한다.
    // 4.setState를 통해 상태 변경
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moives} />
      </section>
    </React.Fragment>
  );
}

export default App;
