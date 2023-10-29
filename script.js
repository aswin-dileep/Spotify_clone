
//Initialize variables
let songIndex =0;
let audioElement = new Audio("songs/2.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName:"Let me love you",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"song 2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"song 3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"song 4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"song 5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"song 6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"song 7",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"song 8",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"song 9",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"song 10",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"}
]

songItem.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerHTML = songs[i].songName;
    
});

//Handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity =1;
        
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity =0;
    }
})


//Audio progress on prgress bar
audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

//change audio time on progress bar

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value/audioElement.duration) *100;
})


const makeAllPlay = function(){
    Array.from(document.getElementsByClassName("songPlayItem")).forEach((element)=>{
        
            element.classList.remove('fa-circle-pause');
            element.classList.add("fa-play-circle");
        
    })
}


Array.from(document.getElementsByClassName("songPlayItem")).forEach((element) => {
       
    element.addEventListener("click", (e) => {
            makeAllPlay();
            songIndex = parseInt(e.target.id)
            console.log(songIndex)
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-circle-pause");
            
            audioElement.src =`songs/${songIndex+1}.mp3`;
            audioElement.currentTime =0;
            audioElement.play();
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-circle-pause");
      
        });
});
