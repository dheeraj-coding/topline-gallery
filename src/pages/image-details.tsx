import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ImageDetails(){
    let query = useQuery();
    console.log(query.get("id"))
    return (
        <p>image details</p>
    )
}