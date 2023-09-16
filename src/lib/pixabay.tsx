import PIXABAY_API_KEY from "../api-key";
import ImageMsg from "./image_message";
export default class PixabayAPI {
    readonly API_KEY = PIXABAY_API_KEY;
    readonly HITS_KEY = "hits";

    constructor(){

    }

    async search(query: string, safesearch: boolean, page: number = 1) {
        const SEARCH_URL = `https://pixabay.com/api/?key=${this.API_KEY}&q=${query}&safesearch=${safesearch}&page=${page}`;
        const response: Response = await fetch(SEARCH_URL);      
        const jsonResponse: Record<string, any> = await response.json();
        return jsonResponse[this.HITS_KEY].map((row: Record<string, string>)=> new ImageMsg(row));
    }
}