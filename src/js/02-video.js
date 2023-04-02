import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(play, 1000));

let currentTime= Number(localStorage.getItem(STORAGE_KEY)) || 0;

function play(event) {
    const videoplayer = event.seconds;

    localStorage.setItem(STORAGE_KEY, videoplayer)
}

player.setCurrentTime(currentTime)
