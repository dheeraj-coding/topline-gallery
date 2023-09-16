export default class ImageMsg {
    readonly ID_KEY = "id";
    readonly TAG_KEY = "tags";
    readonly WEB_IMG_KEY = "webformatURL";
    readonly WEB_IMG_HEIGHT_KEY = "webformatHeight";
    readonly WEB_IMG_WIDTH_KEY = "webformatWidth";
    readonly LG_IMG_KEY = "largeImageURL";
    readonly USER_KEY = "user";
    readonly USER_IMG_KEY = "userImageURL";

    id: string;
    tags: string[];
    previewImgURL: string;
    previewImgHeight: number;
    previewImgWidth: number;
    lgImgURL: string;
    userName: string;
    userImgURL: string;
    constructor(resultEntry: Record<string, string>){
        this.id = resultEntry[this.ID_KEY];
        this.tags = resultEntry[this.TAG_KEY].split(",").map((val)=> val.trim());
        this.previewImgURL = resultEntry[this.WEB_IMG_KEY];
        this.previewImgHeight = parseInt(resultEntry[this.WEB_IMG_HEIGHT_KEY]);
        this.previewImgWidth = parseInt(resultEntry[this.WEB_IMG_WIDTH_KEY]);
        this.lgImgURL = resultEntry[this.LG_IMG_KEY];
        this.userName = resultEntry[this.USER_KEY];
        this.userImgURL = resultEntry[this.USER_IMG_KEY];
    }
}