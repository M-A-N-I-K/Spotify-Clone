console.log("Welcome to spotify!");
// Initialize the variables : 
let audioElement = new Audio('songs/Cold.mp3');
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName : 'Cold' , filepath : 'songs/1.mp3' , coverPath : 'covers/cold(Neffex).jpg' },
    {songName : 'Careless' , filepath : 'songs/2.mp3' , coverPath : 'covers/Careless.jpg' },
    {songName : 'Crown' , filepath : 'songs/3.mp3' , coverPath : 'covers/Crown.jpg' },
    {songName : 'Grateful' , filepath : 'songs/4.mp3' , coverPath : 'covers/Grateful.jpg' },
    {songName : 'Fight Back' , filepath : 'songs/5.mp3' , coverPath : 'covers/Fight Back.jpg' },
    {songName : 'Jantrax - Ronin' , filepath : 'songs/6.mp3' , coverPath : 'covers/Jantrax.jpg' },
    {songName : 'Light It Up' , filepath : 'songs/7.mp3' , coverPath : 'covers/Light It Up.jpg' },
    {songName : 'Never Give Up' , filepath : 'songs/8.mp3' , coverPath : 'covers/Never Give Up.jpg' },
    {songName : 'Rumors' , filepath : 'songs/9.mp3' , coverPath : 'covers/Rumors.jpg' },
    {songName : 'Self Made' , filepath : 'songs/10.mp3' , coverPath : 'covers/Self Made.jpg' }
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByClassName("cover")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// Handle Play/Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
        
})
// Listen to Events 
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 10){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 10;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

