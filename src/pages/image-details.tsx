import React from "react";
import { useLocation } from "react-router-dom";
import Tags from "../components/tags";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ImageDetails(){
    let query = useQuery();
    const id = query.get("id")
    let imgMsg;
    if (id){
        const strMsg = localStorage.getItem(id);
        if (strMsg){
            imgMsg = JSON.parse(strMsg);
        }

    }
    return (
        <div className="h-screen mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="shadow-lg shadow-orange-500 flex flex-col h-full  md:h-4/5 items-center bg-white border rounded-lg md:flex-row dark:bg-slate-600">
                <img className="object-cover rounded-t-lg h-full md:w-4/5 md:rounded-none md:rounded-l-lg" src={imgMsg.imgURL} />
                <div className="flex flex-col items-center m-auto py-20">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={imgMsg.userImgURL? imgMsg.userImgURL : "https://imageupload.io/ib/7cwcH4r3PAaaJ1W_1694837815.png"}/>
                    <h5 className="pb-10 mb-1 text-xl font-medium text-gray-900 dark:text-white">{imgMsg.userName}</h5>
                    <span className="text-xs text-black">
                        {imgMsg.tags.map((tag: string)=>(<Tags text={tag}/>))}
                    </span>
                </div>
            </div>
        </div>
    )
}