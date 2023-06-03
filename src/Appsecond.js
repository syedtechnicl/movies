import { useState } from "react";
import MoviesCard from "./MoviesCard";
import Slider from "react-slick";
import { useEffect } from "react";
import Navbar from "./Navbar";
import settings from "./Setting";

const Appsecond = () => {
  const [Movies, setmovies] = useState([]);

   const [series,setwebseries] = useState([]);


  const Fetchmovies = (Whattosearch) => {
    const url = `http://www.omdbapi.com/?apikey=b47b466f&s=${Whattosearch}`;
    fetch(url).then((res) => {
      res.json().then((data) => {
        setmovies(data.Search);
      });
    });
  };


  const Series = (webseries) => {
    const url = `http://www.omdbapi.com/?apikey=b47b466f&type=episode&s=${webseries}`;
    fetch(url).then((res) => {
      res.json().then((data) => {
        setwebseries(data.Search);
      });
    });
  };






  useEffect(Fetchmovies,Series,[])

  return (
    <>
      <div className="outer">
        <Navbar fetchMovies={Fetchmovies} />
        <br />
        <Slider {...settings}>
          {Movies.map((movie) => {
            return (
              <>
                <MoviesCard src={movie.Poster} title={movie.Title} />
              </>
            );
          })}
        </Slider>
<br /><br />
<h2 style={{color:'#fff',textAlign:'center'}}>web series</h2>
   
   
   <Slider {...settings}>
          {Movies.map((movies) => {
            return (
              <>
                <MoviesCard src={movies.Poster} title={movies.Title} />
              </>
            );
          })}
        </Slider>




      </div>
    </>
  );
};
export default Appsecond;
