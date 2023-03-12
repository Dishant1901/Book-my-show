import React, { useState } from 'react';
import { MovieContext } from '../../context/Movie.context';

const MovieInfo = ( {movie}) => {
    const [isOpen ,setIsOpen] = useState(false);
    const [price,setPrice] =useState(0);
    const genres = movie.genres?.map(({name})=> name).join(", ");
    
    const rentMovie=()=>{
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovie=()=>{
        setIsOpen(true);
        setPrice(599);
    };
 
    return <>
    
        {/* <PaymentModal setIsOpen={setIsOpen} isOpen={ setIsOpen} price={price} /> */}

        <div className='flex flex-col gap-8 '>
            <h1 className='text-white text-5xl font-bold'>
                {movie.original_title}
                </h1>
                <div className='flex text-white flex-col gap-2'>
                    <h4>4k rating</h4>
                    <h4>English , Hindi , Kannda, Taml</h4>
                    <h4> {movie.runtime} min | {genres} </h4>
                </div>
                <div className='flex items-center gap-3 '>
                <button className='bg-red-500 hover:bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                    Rent $149
                </button>
                <button className='bg-red-500 hover:bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                    Buy $449
                </button>
            </div>
            </div>
    </>
}

export default MovieInfo;