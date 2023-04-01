import Vimeo from '@vimeo/player';
import Throttle from 'lodash.throttle';

console.log(Vimeo)

const iframe = document.querySelector('iframe');

console.log(iframe)
console.log('gggg')

// iframe.addEventListener('click', onClickImg)

const player = new Vimeo(iframe);

console.log('jjj')

player.on('timeupdate', play);

const sec = localStorage.getItem(Number("videoplayer-current-time"))

 startVideo()

function play(event) {
    console.log('played the video!');

// if ()

    const videoplayer = event.seconds;
    localStorage.setItem("videoplayer-current-time", Throttle(videoplayer, 2000))
    console.dir(videoplayer)
}

console.log('kakakmn,mn,mn,maka')
// player.setCurrentTime(sec).then(function(seconds) {
//    console.log(sec) // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });




function startVideo() {
    player.setCurrentTime(sec).then(function(seconds) {
   console.log(sec) // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

}


// console.log('ok')