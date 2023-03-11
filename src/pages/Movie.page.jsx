import React, { useEffect, useState,useContext } from 'react'
import MovieLayoutHoc from '../layout/Movie.layout';
import axios from 'axios';
import Slider from 'react-slick';
import {FaCcVisa,FaCcApplePay} from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/Movie.context';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

const MoviePage = () => {

  const {id} = useParams();
  const {movie,setMovie}= useContext(MovieContext);
  const [cast,setCast] =useState([]);
  const [similarMovies,setSimilarMovies]=useState([]);
  const [recommendedMovies,setRecommendedMovies]=useState([]);

// Creating New request to get information regarding MOvie cast
// Geting data from api   & storing in a variable 
// Then using set func to change state  of "cast"

useEffect(()=>{
  const requestCast= async ()=>{
    const getCast =await axios.get (`/movie/${id}/credits`);

    setCast(getCast.data.cast);
  };

  requestCast();
},[id]);


// Request To get similar movies data to show in state

useEffect (()=>{
  const requestSimilarMovies = async ()=>{
    const getSimilarMovies = await axios.get(`/movie/${id}/similar`);

    setSimilarMovies(getSimilarMovies.data.results);
  };

  requestSimilarMovies();
},[id]);

// To show recommendedMovies
useEffect (()=>{
  const requestRecommendedMovies = async ()=>{
    const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);

    setRecommendedMovies(getRecommendedMovies.data.results);
  };

  requestRecommendedMovies();
},[id]);


  const settingsCast={};

  const settings={};

  
  return( <> 
  {/* <MovieHero/> */}

    <div className='my-12 container px-4 lg-ml-20 lg:w-2/1'>
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-gray-800 font-bold text-2xl'>About the Movie</h1>
        <p>{movie.overview} </p>
      </div>

      
    <div className='my-8  '>
      <hr />
    </div>

    <div className='my-8'>
      <h2 className='text-2xl text-gray-800 font-bold mb-3 '>
        Applicable Offers
      </h2>

      <div className='flex flex-col gap-4 lg:flex-row lg:w-3/4 '>
          <div className=' flex  items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md '>
            <div className='w-8 h-8'>
              <FaCcVisa className='w-full h-full' />
            </div>

            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold '>
                Visa Stream Offer
              </h3>

              <p className='text-gray-600'>
                Get 50% off upto INR 150 on all RuPay card* on BookMyShow stream.
              </p>
            </div>
          </div> 
          {/*  */}
          <div className=' flex  items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md '>
            <div className='w-8 h-8'>
              <FaCcApplePay className='w-full h-full' />
            </div>

            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold '>
                Film Pass
              </h3>

              <p className='text-gray-600'>
                Get 50% off upto INR 150 on all RuPay card* on BookMyShow stream.
              </p>
            </div>
          </div> 
          
      </div>
    </div>

    <div className='my-8  '>
      <hr />
    </div> 

    {/* Cast and Crew slider */}

    <div className='my-8  '>
      <hr />
    </div> 

    {/* recommended movies slider */}
    <div className='my-8'>
      <PosterSlider config={settings}
      title ="Recomended movies"
      posters={recommendedMovies}
      isDark={false}
       />
    </div>
    
    <div className='my-8  '>
      <hr />
    </div> 

    {/* recommended movies slider */}
    <div className='my-8'>
      <PosterSlider config={settings}
      title =" Exlusive Movies"
      posters={similarMovies}
      isDark={false}
       />
    </div>



    <div className='my-8  '>
      <hr />
    </div> 


    </div>
  </>
  );
};

export default MovieLayoutHoc(MoviePage);