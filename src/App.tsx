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
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/image" element={<ImageDetails />} />
      </Routes>
    </div>
  );
}

export default App;
