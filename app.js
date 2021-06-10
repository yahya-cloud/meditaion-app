/*
const app = () => {


let song = document.querySelector('.song')
let video = document.querySelector('.video-container video')
const play = document.querySelector('.play')
const outline = document.querySelector('.moving-outline circle')


//sounds 
const sounds = document.querySelectorAll('.sound-select button')
//time
const displayTime = document.querySelector('.time-display')
//time buttons
const timeSelect = document.querySelectorAll('.time-select button')
//duration
let fakeDuration = 600;
//outline length
const outlineLength = outline.getTotalLength()
outline.style.strokeDasharray = outlineLength
outline.style.strokeDashoffset = outlineLength;

play.addEventListener('click', function(){
    checkPlaying(song)
})

timeSelect.forEach(button => 
    button.addEventListener('click', function(){
        fakeDuration = this.getAttribute('data-time');
        displayTime.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
        
}))


sounds.forEach(sound => {
    sound.addEventListener('click', function(){
        song.src = this.getAttribute('data-sound');
        video.src = this.getAttribute('data-video');
        checkPlaying(song)
    })
})

const checkPlaying = song => {
    if(song.paused){
        song.play();
        video.play()
        play.src = './svg/pause.svg'
    }else{
        song.pause();
        video.pause()
        play.src = './svg/play.svg'
    }
}


song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    outline.style.strokeDashoffset =  outlineLength - ((currentTime / fakeDuration) * outlineLength);
    displayTime.textContent = `${minutes}:${seconds}`

    if(currentTime >= fakeDuration){
        song.pause();
        video.pause();
        play.src = './svg/play.svg'
        song.currentTime = 0;
    }
}

}
app();
*/
const app = () => {

    var video = document.querySelector('.video-container video')
    var song = document.querySelector('.song')
    var timeDisplay = document.querySelector('.time-display')
    var outline = document.querySelector('.moving-outline circle')

    const play = document.querySelector('.play')
    const songs = document.querySelectorAll('.sound-select button')
    const timeSelect = document.querySelectorAll('.time-select button')
    const outlineLength = outline.getTotalLength();
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    fakeDuration = 600;
    console.log(outlineLength);

    timeSelect.forEach(button => {
        button.addEventListener('click', function(){
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration%60)}`
        })
    })

    songs.forEach(button => {
        button.addEventListener('click', function(){
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song)
        })
    })

    play.addEventListener('click', function(){
        checkPlaying(song)
    })
     const checkPlaying = song => {
         if(song.paused){
             song.play()
             video.play()
             play.src = './svg/pause.svg'
         }else{
             song.pause()
             video.pause()
             play.src = './svg/play.svg'
         }

         song.ontimeupdate = () => {
             var currentTime = song.currentTime;
             var elapsed = fakeDuration - currentTime;
             var minutes = Math.floor(elapsed / 60);
             var seconds = Math.floor(elapsed % 60);
             outline.style.strokeDashoffset =  outlineLength - ((currentTime / fakeDuration) * outlineLength);
             timeDisplay.textContent = `${minutes}:${seconds}`
              
         }
     }

  
    

}
app();