
//Initialize variables
let songIndex =0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs=[
    {songName:"Let me love you",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Let me love you",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"}
]

//Handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-circle-play");
    }
})

myProgressBar.addEventListener("timeupdate",()=>{

})

audioElement.play()