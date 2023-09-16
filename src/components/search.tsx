import React, { useState } from "react";
import {AiOutlineSearch} from "react-icons/ai";
export default function SearchBar({onChange}: {onChange: (query:string) => any}){
    const [query, setQuery] = useState("");

    function onInputChange(e: any){
        setQuery(e.target.value);
    }

    function handleEnter(e: any){
        if (e.keyCode === 13){
            console.log(query);
            onChange(query);
        }
    }

    
    return (
        <form className="w-11/12 lg:w-3/4 relative mx-auto my-8">
            <div className="relative ">
                <input onKeyUp={handleEnter} onChange={onInputChange} type="search" placeholder="Search" id="search-field" className="shadow-lg shadow-orange-300 placeholder-orange-500 w-full p-4 rounded-full " />
                <button className="w-20 absolute right-2 top-1/2 p-3 text-orange-500 -translate-y-1/2 rounded-full bg-slate-600">
                    <AiOutlineSearch className="mx-auto" size={24} />
                </button>
            </div>
        </form>
    )
}