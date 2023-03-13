import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout';

// Components
import Poster from "../components/Poster/Poster.components";
import PlayFilters from '../components/PlayFilters/PlayFilters.compinent';


const PlayPage = () => {
  return ( <>
  
    <div className='container mx-auto px-4 my-10'>
      <div className='w-full flex flex-col-reverse lg:flex lg:flex-row-reverse gap-4'>
        <div className='lg:w-3/4 bg-white rounded ' >
          <h2 className= ' text-2xl font-bold mb-4 '> Plays in Gwalior</h2>
          <div className='flex flex-wrap'>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-centre'>
              <Poster 
              isPlay={true}
              src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-introduction-to-machine-learning-with-chatgpt-0-2023-3-9-t-8-51-47.jpg'
              title='Art of SandWhich eating'
              subtitle=' Comedy SHows | Hindi , English | 16yrs + | 1hr 30mins'/>
            </div>
          </div>
        </div>

        <div className='lg:w-1/4 p-4 bg-white rounded' >
          <h2 className='text-2xl font-bold mb-4'>Filters</h2>
          <div>
            <PlayFilters 
              title='Date'
              tags={['Today', "Tommorow" , 'This Weekend']}
             />
          </div>
          <div>
            <PlayFilters 
              title='Language'
              tags={['English', "Hindi" , 'Tamil']}
             />
          </div>
        </div>
      </div>

    </div>
  
  </>
  )
}

export default DefaultLayoutHoc(PlayPage);