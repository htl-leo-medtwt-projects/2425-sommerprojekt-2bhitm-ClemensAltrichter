//import * as Tone from "tone";

let slider = document.getElementById('inputBPM')

let notes = Array(64).fill('')
let bpm = 120;
let isPlaying = false;




slider.addEventListener('input', ()=>{
    
    
    bpm = slider.value 
    document.getElementById('BPMLabel').innerHTML = bpm + ' BPM';
})

const synths = [
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
]

const scaleOfNotes=['C4','D4','E4','F4','G4','A4','B4'];


let rows =[
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[7], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[6], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[5], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[4], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[3], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[2], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[1], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[0], active: false}))
]


//eigener versuch hab paar sachen weggelassen => nochmal im video nahcscheun
//dritter wert bei triggerAttack Releas ????
let beat =0;
Tone.Transport.scheduleRepeat(time => {
    
    for(let i = 0; i < rows.length;i++){
        let synth = synths[i];
        let note = rows[i][beat];
        
        console.log(beat);
        console.log(i);
        
        console.log(note);
        
        

        if(note.active){
             console.log(note);
            synth.triggerAttackRelease(note.note,"16n",time)
            
        }  
          
    }
 beat = (beat+1)%16

},"16n");


function notePressed(row,note){
    console.log(rows);
    
rows[row][note].active =! rows[row][note].active; 

console.log(document.getElementsByClassName("notes")[row*16 + note]);

if(rows[row][note].active){
document.getElementsByClassName("notes")[row*16 + note].classList.add("active");
}else{
    document.getElementsByClassName("notes")[row*16 + note].classList.remove("active");
}
}


for(let r = 0; r<8;r++){
    for(let n= 0; n<16;n++){
        document.getElementsByClassName("notes")[r*16 + n].addEventListener("click",()=>{notePressed(r,n)})
    }
}

//document.getElementById("playButton").addEventListener("click", (isPlaying)?pausePlay:startPlay)

document.getElementById("playButton").addEventListener("click", () => {
    if (isPlaying) {
      pausePlay();
    } else {
      Tone.start().then(() => {
        startPlay();
      });
    }
  });

function startPlay(){
    //Tone.start();
    Tone.Transport.bpm.value = bpm;
    Tone.Transport.start();
    isPlaying = true;
    document.getElementById("playButton").innerHTML = '<img src="../img/pauseButton.svg">'
}
function pausePlay(){
    Tone.Transport.stop();
    isPlaying = false;
    document.getElementById("playButton").innerHTML = '<img src="../img/playButton.svg">'
}