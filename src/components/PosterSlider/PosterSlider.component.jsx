import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.components';


const PosterSlider = (props) => {

  const {posters,title,subject,isDark,config} =props;
  const settings={};

  return (
    <>
      <div className='flex flex-col items-start sm:ml-3 ml-0 my-2'>
        <h3 className={`text-2xl font-bold ${isDark?"text-white": "text-black"}`}>
          {title}
        </h3>
        <p className= {`text-sm ${isDark?"text-white": "text-gray"}`}>
          {subject}

        </p>
      </div>

      <Slider {...settings}>
          {posters.map((each)=> (
            <Poster {...each} isDark={isDark} />
          ))}

      </Slider>
    </>
  )
}

export default PosterSlider;