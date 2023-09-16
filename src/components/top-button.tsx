export default function ScrollTop(){

    const goToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button id="to-top-button" onClick={goToTop} title="Go To Top"
            className="fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-orange-600 hover:bg-orange-800 text-white text-lg font-semibold transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
            </svg>
            <span className="sr-only">Go to top</span>
        </button>
    );
}