console.log("Welcome");
let songIndex=1;
let a=1;
let audioElement=new Audio('static/songs/1.mp3');
// audioElement.play();
let Slider=document.getElementById('Slider');
let masterPlay=document.getElementById('masterPlay');
let SongContents=Array.from(document.getElementsByClassName('SongContents'));
// let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));

let songs=[
    {songName:"Let Me Love You",filePath:"static/songs/1.mp3",coverPath:"static/images/1.jpg"},
    {songName:"Call Me By Name",filePath:"static/songs/2.mp3",coverPath:"static/images/2.jfif"},
    {songName:"Shivers",filePath:"static/songs/3.mp3",coverPath:"static/images/3.jfif"},
    {songName:"Turn Down",filePath:"static/songs/4.mp3",coverPath:"static/images/5.jfif"},
    {songName:"Stay",filePath:"static/songs/5.mp3",coverPath:"static/images/4.jfif"},
    {songName:"Love Nwantiti",filePath:"static/songs/6.mp3",coverPath:"static/images/6.jfif"},
    {songName:"Warriyo Mortals",filePath:"static/songs/7.mp3",coverPath:"static/images/7.jfif"},
    {songName:"Unknown Brains",filePath:"static/songs/8.mp3",coverPath:"static/images/8.jfif"},
]
SongContents.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songItems")[0].innerText=songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
   if(audioElement.paused|| audioElement.currentTime<=0)
   {
       audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        let cu=document.getElementById(`${songIndex}`);
        cu.classList.remove('fa-play-circle');
        cu.classList.add('fa-pause-circle');

      
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        let cu=document.getElementById(`${songIndex}`);
        cu.classList.add('fa-play-circle');
        cu.classList.remove('fa-pause-circle');
    }
})
// 
// listen events
audioElement.addEventListener('timeupdate',()=>{
    
    // Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    Slider.value=progress;
 
})
Slider.addEventListener('change',()=>{
    audioElement.currentTime=(Slider.value*audioElement.duration)/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
    
}
let songInde =-1;
let n=-1;

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllPlays();
       let cursong=songIndex;
       songIndex=parseInt(e.target.id);
    //    console.log(songIndex);
     
        
     if(songInde==songIndex&&n%2!=0)
     {    
        // console.log(n);
         console.log(songInde);
        audioElement.pause();
         console.log(songIndex);
         e.target.classList.remove('fa-pause-circle');
         e.target.classList.add('fa-play-circle');
         masterPlay.classList.add('fa-play-circle');
         masterPlay.classList.remove('fa-pause-circle');
         n++;
        }
        else if(songInde==songIndex&&n%2==0){
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            songInde=songIndex;
            // audioElement.currentTime=0;
            // audioElement.src =`static/songs/${songIndex}.mp3`;
            
            masterPlay.classList.remove('fa-play-circle');
            audioElement.play();
            
            masterPlay.classList.add('fa-pause-circle');
            n++;

        }
        
        else{   e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songInde=songIndex;
        audioElement.currentTime=0;
        audioElement.src =`static/songs/${songIndex}.mp3`;
        masterPlay.classList.remove('fa-play-circle');
        audioElement.play();
        
        masterPlay.classList.add('fa-pause-circle');
        n++;

    }
   }) 
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>7){
        
        let ne=document.getElementById(`${songIndex}`);
        ne.classList.remove('fa-pause-circle');
        console.log("bye");
        ne.classList.add('fa-play-circle');
        
        songIndex=1;
    }
    else{
        let ne=document.getElementById(`${songIndex}`);
        ne.classList.remove('fa-pause-circle');
        ne.classList.add('fa-play-circle');
        songIndex+=1;
    }
    audioElement.src =`static/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    let cu=document.getElementById(`${songIndex}`);
        cu.classList.remove('fa-play-circle');
        cu.classList.add('fa-pause-circle');
        // if(songIndex>0)
        // {let ne=document.getElementById(`${songIndex}`);
        // ne.classList.remove('fa-pause-circle');
        // ne.classList.add('fa-play-circle');}
    
  
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        let cu=document.getElementById(`${songIndex}`);
        cu.classList.add('fa-play-circle');
        cu.classList.remove('fa-pause-circle');

        songIndex=8;

    }
    else{let ne=document.getElementById(`${songIndex}`);
    ne.classList.remove('fa-pause-circle');
    ne.classList.add('fa-play-circle');
        songIndex-=1;
    }
    audioElement.src =`static/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    let cu=document.getElementById(`${songIndex}`);
        cu.classList.remove('fa-play-circle');
        cu.classList.add('fa-pause-circle');
  
})
audioElement.addEventListener('ended',()=>{
    console.log('hi');
    if(songIndex>7)
    {  let cu=document.getElementById(`${songIndex}`);
    cu.classList.add('fa-play-circle');
    cu.classList.remove('fa-pause-circle');
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
       
    //    console.log(songIndex);
    //    let ne=document.getElementById(`${songIndex+1}`)
    //    ne.classList.remove('fa-play-circle');
    //    ne.classList.add('fa-pause-circle');
}
else{
   let cu=document.getElementById(`${songIndex}`)
   cu.classList.add('fa-play-circle');
   cu.classList.remove('fa-pause-circle');
   
audioElement.src=`static/songs/${songIndex+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    let ne=document.getElementById(`${songIndex+1}`)
    ne.classList.remove('fa-play-circle');
    ne.classList.add('fa-pause-circle');
    songIndex++;
}
})