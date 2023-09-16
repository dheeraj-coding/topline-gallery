export default function ZeroResult({query}:{query:string}){
    return (
        <div className="col-span-4 w-full justify-center mx-auto h-20 flex flex-col items-center align-middle">
            <p className="text-lg text-center">We couldn't find any results for {query}</p>
        </div>
    );
}