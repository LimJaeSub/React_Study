import React, { useState,useEffect,useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [error,setError] = useState(null);


  // @useCallback을 사용해 불필요하게 재생성되는 경우 방지
  const fetchMoviesHandler=useCallback(async()=>
    {
      setIsLoding(true);
      setError(null);

      try{
        const response = await fetch("https://swapi.dev/api/films/");
        if(!response.ok){
          throw new Error('somethin went wrong');
        }
        const data = await response.json();


        // @ response.ok => 응답이 잘 왔는지 확인하는것
        // throw new Error => 예외를 발생시키는것, 예외가 발생하면 함수가 중지되고 catch문으로 넘어감
        // response.ok가 false(무언가 문제가 발생)이면 throw로 예외를 발생시키고 catch문으로 전달한다.
        const transformedMovies = data.results.map((movieData) => {
            return {
              id: movieData.episode_id,
              title: movieData.title,
              openingText: movieData.opening_crawl,
              releaseDate: movieData.release_date,
            };
          });
        setMovies(transformedMovies);
        setIsLoding(false);
      } catch(error){
        setError(error.message);
        setIsLoding(false); // 오류가 발생하면 로딩은 항상 중단
      }
    
    }
  ,[]);
  
  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler]) 

  let content = <p>fount no movies</p>

  if(movies.length>0){
    // @ movies가 잘 들어왔으면
    content = <MoviesList movies={movies} />
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    // @ 로딩중이면
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
