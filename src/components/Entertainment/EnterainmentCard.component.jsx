import React from 'react'
import Slider  from "react-slick";

const EnterainmentCard = (props) => {
  return (
    <>
      <div className='w-full h-30 px-2'>

        <img
            className='w-full h-full rounded-lg' 
            src={props.src}
            alt="entertainment"
          />

      </div>
    </>
  )
}


const EnterainmentCardSlider =() =>{

  const EntrtainmentImage=[ "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTI1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png",
  "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
];

const settings = {
  infinite: true,
  autoplay: true,
  // ye h for kitni der bd autoplay ho
  autoplaySpeed:4000,
  // ye btata h kisspeed se scroll ho
  speed:1000,
  slidesToShow : 5,
  slidesToScroll:4,
  initialSlide:0,
  // cssEase: "linear",
  // centerPadding: "60px",
  className: "center",
  // centerMode: true,
  dots: true,
  responsive :[
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
        slidesToShow:3,
        slidesToScroll:1,
        initialSlide:1,
      },

    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow:2,
        slidesToScroll:2,
        
      },

    },
  ]
}

  // return statemnt m apn settings ko as  a prop pass kr rhe h
  // fir EntrtainmentImage k hr ek image ko map krte huye usko EnterainmentCard k src m dal rhe
  return (
    <>
      <Slider {...settings}>
        {EntrtainmentImage.map((image ,index) =>(
          <EnterainmentCard src={image} key={index} />
        ))}

      </Slider>
    </>
  )
}

export default EnterainmentCardSlider;