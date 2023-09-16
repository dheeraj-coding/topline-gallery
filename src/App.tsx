import React, { useEffect, useState } from 'react';
import './App.css';
import PixabayAPI from './lib/pixabay';
import SearchBar from './components/search';
import ImageMsg from './lib/image_message';
import Image from './components/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Masonry } from 'react-masonry/dist';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/search-page';
import ImageDetails from './pages/image-details';

function App() {
  
  return (
    <div className="h-screen">
      <header className="fixed text-slate-800 font-fira-sans text-2xl w-full py-5 -top-2 z-50 bg-orange-300 text-center">
        Picasso
      </header>
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/image" element={<ImageDetails />} />
      </Routes>
    </div>
  );
}

export default App;
