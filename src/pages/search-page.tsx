import React, { useEffect, useState } from 'react';
import PixabayAPI from '../lib/pixabay';
import SearchBar from '../components/search';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageMsg from '../lib/image_message';
import Image from '../components/image';
import ZeroResult from '../components/no-result';
import Loading from '../components/loading';
import ScrollTop from '../components/top-button';

export default function SearchPage(){
    const [imgData, setImageData] = useState([]);
    const [totalDataLength, setTotalDataLength] = useState(0);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [zeroResult, setZeroResult] = useState(false);
    const pixabay = new PixabayAPI();

    useEffect(()=>{
        (async () => {
        const {images, total} = await pixabay.search("", false);
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
        if(images.length == 0){
            setZeroResult(true);
        } else {
            setZeroResult(false);
        }
        })();
    }
    return (
        <>
        <SearchBar onChange={handleQuery} />
        <div className='flex-1 overflow-y-auto mx-auto max-w-screen-2xl px-4 md:px-8'>
            <InfiniteScroll 
                className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 md:gap-6 xl:gap-8'
                dataLength={imgData.length} 
                next={()=> {
                    if(imgData.length < totalDataLength){
                        pixabay.search(query, false, page).then(({images})=>{
                            setImageData((prevData) => prevData.concat(images))
                            setPage((prevPage)=> prevPage+1);
                            if(images.length == 0){
                                setZeroResult(true);
                            } else{
                                setZeroResult(false);
                            }
                        }).catch((e)=>{
                            console.log(e);
                        })
                    } else {
                        setHasMore(false);
                    }   
                }}
                hasMore = {hasMore}
                loader = {zeroResult ? <ZeroResult query={query}/> : <Loading/>}
                endMessage = {<p>Ended!</p>}
            >
                {imgData.map((img: ImageMsg, i: number)=>{
                        if (i < imgData.length - (imgData.length % 3)){
                            return (<Image key={img.id} imgMsg={img}/>);
                        }})}
            </InfiniteScroll>
                    
        </div>
        <ScrollTop />
        </>
    )
}