import * as twit from "twit";
import config from "./config";
import verses from "./verses";

const Twitter: twit = new twit(config);
const totalVerses: number = verses.length;
let versesPosted: number = 0;

function postVerse() {
    if (versesPosted !== totalVerses) {
        Twitter.post('statuses/update',{status: verses[versesPosted].verse},
        (err,data,response) => console.log(data));
        versesPosted++;
        return;
    }

    if (versesPosted === totalVerses) {
        versesPosted = 0;
    }
}

setInterval(postVerse,1800000)