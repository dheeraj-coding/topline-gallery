import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PixabayAPI from './lib/pixabay';
import SearchBar from './components/search';
import ImageMsg from './lib/image_message';
import Image from './components/image';

function App() {
  const [imgState, setImage] = useState([]);
  const pixabay = new PixabayAPI();
  (async () => {
    const vals = await pixabay.search("dogs", false);
    setImage(vals)
  })();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <SearchBar />
      <div className='mt-12 gap-2 columns-2 md:gap-8 md:columns-3'>
        {imgState && imgState.map((img: ImageMsg) => {
          return (<Image imgURL={img.previewImgURL} />);
        })}
      </div>
    </div>
  );
}

export default App;
