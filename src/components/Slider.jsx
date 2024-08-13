import 'react-slideshow-image/dist/styles.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';
//import MenuAppBar from './Homepgappbar';

const spanStyle = {
  padding: '0',
  background: '#efefef',
  color: '#000000',
};

const divStyle = {  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px', // Halved height
  overflow: 'hidden', // Ensures no overflow of images
};

const slideImages = [
  {
    url: 'https://cdn.mos.cms.futurecdn.net/95zaHKfiupQkdB2HuuujmU.jpg',duration:2000
  },
  {
    url: 'https://www.hdwallpapers.in/download/decorated_hanging_light_bed_glass_window_4k_hd_room-3840x2160.jpg',duration:2000
  },
  {
    url: 'https://static.vecteezy.com/system/resources/previews/036/155/369/non_2x/ai-generated-washing-machine-in-laundromat-laundry-room-interior-photo.jpg',duration:2000
  },
  {
    url: 'https://www.thebrick.com/cdn/shop/products/cy793alanvsn52mvj0pc_1500x.jpg?v=1569300526',duration:2000
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} style={divStyle}>
            <img src={slideImage.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
