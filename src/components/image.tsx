export default function Image({imgURL}:{imgURL:string}){
    return (
        <img className="rounded-xl w-full aspect-auto mb-6" src={imgURL}/>
    );
}