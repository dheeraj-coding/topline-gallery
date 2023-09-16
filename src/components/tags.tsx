export default function Tags ({text}: {text:string}){
    return (
        <div
            className="my-2 ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
        >
            {text}
        </div>
    )

}