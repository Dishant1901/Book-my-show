import React ,{useState} from 'react'
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousel = () => {
  const [images ,setImages]= useState([]);

  const settings ={
    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slideToScroll:1,
    nextArrow: <NextArrow/> ,
    prevArrow: <PrevArrow/> , 

  };

  const settingsLG={

    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slideToScroll:1,
    nextArrow: < NextArrow/> ,
    prevArrow:<PrevArrow/> , 

  };
 
  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {
            images.map((images)=>(
              <div className='w-full h-56 md:h-80 py-3'>
                <img src=''
                 alt=" Hero banner"
                 className='w-full h-full rounded-md object-cover'
                  />
              </div>
            ))
          }
        </HeroSlider>

      </div>
      <div className='hidden lg:block'>
      {/* to show all slides */}
      <HeroSlider {...settingsLG}>
          {/* to use js in react use it inside {} */}
          {
            images.map((images)=>(
              // thi is dyanamic array mapping
              <div className='w-full h-96 px-2 py-3'>
                <img src=''
                 alt=" Hero banner"
                 className='w-full h-full rounded-md object-cover'
                  />
              </div>
            ))
          }
        </HeroSlider>
      </div>
    
    </>
  )
}

export default HeroCarousel;