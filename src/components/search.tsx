import React from "react";
import {AiOutlineSearch} from "react-icons/ai";
export default function SearchBar(){
    return (
        <form className="w-full lg:w-3/4 relative">
            <div className="relative">
                <input type="search" placeholder="Search" className="placeholder-orange-500 w-full p-4 rounded-full " />
                <button className="absolute right-2 top-1/2 p-3 text-orange-500 -translate-y-1/2 rounded-full bg-slate-600">
                    <AiOutlineSearch />
                </button>
            </div>
        </form>
    )
}