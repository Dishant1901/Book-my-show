import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.components';


const PosterSlider = (props) => {

  const {posters,title,subject,isDark,config} =props;
  
  const settings={
    infinite:false,
    speed:500,
    slidesToShow: 5,
    slidesToScroll:4,
    responsive:[
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll:2,
  
        },
  
      },
  
      {
        breakpoint: 600,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide:1,
        },
  
      },
  
      {
        breakpoint: 480,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          
        },
  
      },
    ]
  };

  return (
    <>
      <div className='flex flex-col items-start sm:ml-3 ml-0 my-2'>
        {/* this is for condition based toggling */}
        <h3 className={`text-2xl font-bold ${isDark?"text-white": "text-black"}`}>
          {title}
        </h3>
        <p className= {`text-sm ${isDark?"text-white": "text-gray"}`}>
          {subject}

        </p>
      </div>

      <Slider {...settings}>
         {posters.map((each,index) =>(
          // idr isDark={isDark} apn ek new prop pass krrhe h
          <Poster {...each} isDark={isDark} key={index} />
         ))}

         {/* kya apn is poster component ko is component k andr bna skte h?
         try it out asap     */}
      


      </Slider>
    </>
  );
};

export default PosterSlider;