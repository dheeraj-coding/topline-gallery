import React, { useEffect, useState } from 'react';
import PixabayAPI from '../lib/pixabay';
import SearchBar from '../components/search';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageMsg from '../lib/image_message';
import Image from '../components/image';

export default function SearchPage(){
    const [imgData, setImageData] = useState([]);
    const [totalDataLength, setTotalDataLength] = useState(0);
    const [query, setQuery] = useState("dogs");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pixabay = new PixabayAPI();

    useEffect(()=>{
        (async () => {
        const {images, total} = await pixabay.search("dogs", false);
        setImageData(images)
        setTotalDataLength(total);
        })();
    }, []);

    const handleQuery = (query: string) => {
        setImageData([])
        setTotalDataLength(0);
        setQuery(query);
        setPage(1);
        setHasMore(true);
        (async () => {
        const {images, total} = await pixabay.search(query, false);
        setImageData(images)
        setTotalDataLength(total);
        })();
    }
    return (
        <>
        <SearchBar onChange={handleQuery} />
        <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
            <InfiniteScroll 
                className='grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8'
                dataLength={imgData.length} 
                next={()=> {
                    if(imgData.length < totalDataLength){
                    console.log("infinite")
                    pixabay.search(query, false, page).then(({images})=>{
                        console.log(images.length)
                        setImageData((prevData) => prevData.concat(images))
                        setPage((prevPage)=> prevPage+1);
                    }).catch((e)=>{
                        console.log(e);
                    })
                    } else {
                    setHasMore(false);
                    }   
                }}
                hasMore = {hasMore}
                loader = {<p>Loading...</p>}
            >
                {imgData && imgData.map((img: ImageMsg, i: number)=>{
                if (i < imgData.length - (imgData.length % 3)){
                    return (<Image key={img.id} imgMsg={img}/>);
                }
                })}
            </InfiniteScroll>        
        </div>
        </>
    )
}