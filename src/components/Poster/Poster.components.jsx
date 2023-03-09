import React from 'react';
import {Link} from "react-router-dom";

const Poster = (props) => {
  return  <Link to = {`/movie/${props.id}`}> 
    <div className='flex flex-col items-start gap-2 px-1 md:px-3'>
      <div className=''></div>

    </div>
  </Link>
  
};

export default Poster;