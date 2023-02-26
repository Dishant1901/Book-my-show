import React ,{useState} from 'react'
import HeroSlider from 'react-slick';

const HeroCarousel = () => {
  const [images ,setImages]= useState([]);
 
  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider>
          {
            images.map((images)=>(
              <div className='w-full h-56 md:h-80 py-3'>
                <img src=""
                 alt=" Hero banner"
                 className='w-full h-full rounded-md object-cover'
                  />
              </div>
            ))
          }
        </HeroSlider>

      </div>
      <div className='hidden lg:block'>
      <HeroSlider>
          {
            images.map((images)=>(
              <div className='w-full h-96 px-2 py-3'>
                <img src=""
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