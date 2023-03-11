import React, { useEffect, useState } from 'react'
import axios from 'axios';
// compoenents
import EntertainmentCardSlider from '../components/Entertainment/EnterainmentCard.component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
// Layout HOC
import DefaultLayoutHoc from '../layout/Default.layout';


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvent, setOnlineStreamEvent] = useState([]);

// To show recommendedMovies from api
  useEffect(()=>{
    const requestPopularMovies = async ()=>{
      const getPopularMovies = await axios.get(
      '/movie/popular'
      ); 

      setRecommendedMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
    
  },[]);

// To show premierMovies
  useEffect(()=>{
    const requestTopRatedMovies = async ()=>{
      const getTopRatedMovies = await axios.get(
      '/movie/top_rated'
      ); 

      setPremierMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
    
  },[]);

// To show onlineStreamEvent
  useEffect(()=>{
    const upcomingMovies = async ()=>{
      const getTopRatedMovies = await axios.get(
      '/movie/upcoming'
      ); 

      setOnlineStreamEvent(getTopRatedMovies.data.results);
    };

    upcomingMovies();
    
  },[]);

  return (
    <>
      <HeroCarousel />

      <div className='container mx-auto px-4 md:px-12 my-8 '>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
          The best of Entertainment</h1>
        <EntertainmentCardSlider />
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider

        // joh ye poster component call hoga usme ye sb as props pass honge
          title="Recommended Movies"
          subject="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className='bg-premier-800 py-12'>
        <div className=' container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className='w-full h-full'
            />
          </div>

          <PosterSlider
          // joh ye poster component call hoga usme ye sb as props pass honge
           title="Premiers"
           subject="Brand new realse every Friday"
           posters={premierMovies}
           isDark={true}
          />
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>

        <PosterSlider
        // joh ye poster component call hoga usme ye sb as props pass honge
         title="Online streaming Events"
         subject=""
         posters={onlineStreamEvent}
         isDark={false}
        />

      </div>

    </>
  )

};

export default DefaultLayoutHoc(HomePage);