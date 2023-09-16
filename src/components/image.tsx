import {PiDownloadSimpleBold} from 'react-icons/pi'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import ImageMsg from '../lib/image_message';

export default function Image({imgMsg}:{imgMsg: ImageMsg}){
    return (
        <a href={`/image?id=${imgMsg.id}`} className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img src={imgMsg.previewImgURL} 
            loading="lazy" 
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="flex flex-row items-center justify-between relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-lg">
                <BsFillSuitHeartFill className='m-4'/>
                <p>{imgMsg.likes}</p>
            </span>
        </a>
    );
}