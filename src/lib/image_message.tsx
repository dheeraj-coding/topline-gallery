const ID_KEY = "id";
const TAG_KEY = "tags";
const WEB_IMG_KEY = "webformatURL";
const WEB_IMG_HEIGHT_KEY = "webformatHeight";
const WEB_IMG_WIDTH_KEY = "webformatWidth";
const LG_IMG_KEY = "largeImageURL";
const USER_KEY = "user";
const USER_IMG_KEY = "userImageURL";
const LIKES_KEY = "likes";
const VIEWS_KEY = "views";
const USER_ID_KEY = "user_id";

export default class ImageMsg {

    id: string;
    tags: string[];
    previewImgURL: string;
    previewImgHeight: number;
    previewImgWidth: number;
    lgImgURL: string;
    userName: string;
    userImgURL: string;
    likes: number;
    views: number;
    userID: string;
    constructor(resultEntry: Record<string, string>){
        this.id = resultEntry[ID_KEY];
        this.tags = resultEntry[TAG_KEY].split(",").map((val)=> val.trim());
        this.previewImgURL = resultEntry[WEB_IMG_KEY];
        this.previewImgHeight = parseInt(resultEntry[WEB_IMG_HEIGHT_KEY]);
        this.previewImgWidth = parseInt(resultEntry[WEB_IMG_WIDTH_KEY]);
        this.lgImgURL = resultEntry[LG_IMG_KEY];
        this.userName = resultEntry[USER_KEY];
        this.userImgURL = resultEntry[USER_IMG_KEY];
        this.likes = parseInt(resultEntry[LIKES_KEY]);
        this.views = parseInt(resultEntry[VIEWS_KEY]);
        this.userID = resultEntry[USER_ID_KEY];

        const cacheImgData = {userName: this.userName, userImgURL: this.userImgURL, imgURL: this.lgImgURL, tags: this.tags};
        localStorage.setItem(this.id, JSON.stringify(cacheImgData));
    }
}