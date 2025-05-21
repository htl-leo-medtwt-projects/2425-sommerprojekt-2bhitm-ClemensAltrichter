//Library Abschnitt
let savedSongs = [];













let slider = document.getElementById('inputBPM')

let notes = Array(64).fill('')
let bpm = 120;
let isPlaying = false;




slider.addEventListener('input', ()=>{
    
    
    bpm = slider.value 
    document.getElementById('BPMLabel').innerHTML = bpm + ' BPM';
})

/*
const synths = [
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.MetalSynth().toDestination(),
    new Tone.MembraneSynth().toDestination(),
]

synths[6].volume.value = -16;

const scaleOfNotes=['C2','D6','E3','F3','G3','A3','B3','C3'];

*/

/*
const rowNames=['C4','D4','E4','F4','c2','hiHat','snare','Kick'];
const synths = [
    new Tone.Synth().toDestination(),         // Melodic Lead
    new Tone.Synth().toDestination(),         // FX / Percussive Element
    new Tone.PolySynth().toDestination(),     // Chords / Stabs
    new Tone.MonoSynth().toDestination(),     // Bass
    new Tone.Synth().toDestination(),    // Open Hi-Hat (längeres Decay einstellen)
    new Tone.MetalSynth().toDestination(),    // Closed Hi-Hat
    new Tone.NoiseSynth().toDestination(),    // Snare / Clap
    new Tone.MembraneSynth().toDestination(), // Kick Drum
  ];
  
  //const scaleOfNotes = ['C5', 'A4', 'G3', 'E3', 'C2', 'F#2', 'D#1', 'C1'];
  const scaleOfNotes = ['C1', 'D#1', 'F#2', 'C2', 'E3', 'G3', 'A4', 'C5'];
  
  */
const rowNames=['C4','D4','E4','F4','c2','hiHat','snare','Kick'];

  const sampler = new Tone.Sampler({
  urls: {
    C1: "Cassette808_BD01.wav",
  D1: "Cassette808_CL_01.wav",
  E1: "Cassette808_HH_01.wav",
  F1: "Cassette808_Snr01.wav",
  G1: "Cassette808_CP_01.wav",
  A1: "Cassette808_Cym01.wav",
  B1: "Cassette808_Tom01.wav",
  C2: "Cassette808_Cow01.wav",
  },
  baseUrl: "../sounds/Cassette808_Maschine/Cassette808_Samples/",
}).toDestination();

const scaleOfNotes = ['C2', 'B1', 'A1', 'G1', 'F1', 'E1', 'D1', 'C1'];

  

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

for(let i = 0; i<rows.length;i++){
    console.log( document.getElementsByClassName('rowLabel')[i]);
    console.log(scaleOfNotes[i]);
    
    
    document.getElementsByClassName('rowLabel')[i].innerHTML = `<p>${ rowNames[i]}</p>`
}


//eigener versuch hab paar sachen weggelassen => nochmal im video nahcscheun
//dritter wert bei triggerAttack Releas ????
let beat =0;
Tone.Transport.scheduleRepeat(time => {
    
    for(let i = 0; i < rows.length;i++){
        let synth = sampler[i]; //synths[i];
        let note = rows[i][beat];
        
        console.log(beat);
        console.log(i);
        
        console.log(note);
        
        

        if(note.active){
             console.log(note);
            sampler.triggerAttackRelease(note.note,"16n",time)//synth
            
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
    document.getElementById("playButton").innerHTML = '<img src="../img/pauseButton.png">'

   
}
function pausePlay(){
    Tone.Transport.stop();
    isPlaying = false;
    document.getElementById("playButton").innerHTML = '<img src="../img/playButton.svg">'
}

function clearBeat(){
    
    for(let i = 0; i<rows.length;i++){
        for(let n= 0; n<16;n++){
            rows[i][n].active = false;
            document.getElementsByClassName("notes")[i*16 + n].classList.remove("active");
        }
    }
    
    
}

function saveBeat(){
   
    console.log("saveBeat");
    
    let savedBeats = JSON.parse( localStorage.getItem('savedBeat')) ?? [];
    console.log(rows);
    
    savedBeats.push(rows);
    localStorage.setItem('savedBeat', JSON.stringify(savedBeats));

    /*

    let savedSynths = JSON.parse(localStorage.getItem('savedSynths')) ?? [];
    
    savedSynths.push(synths);
    console.log(savedSynths.self);
    delete savedSynths.self;
    console.log(JSON.stringify(savedSynths));
    
    
    localStorage.setItem('savedSynths', JSON.stringify(savedSynths));

    let savedNotes =JSON.parse( localStorage.getItem('savedNotes')) ?? [];
    savedNotes.push(scaleOfNotes);
    
    
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
*/

saveInfo();
    
}
function saveInfo(){
    let title = document.getElementById('titleInput').value;
    let color = document.getElementById('colorInput').value;
    let rating = document.getElementById('ratingInput').value;
    let date = new Date().toDateString();
    
    let savedInfo = JSON.parse(localStorage.getItem('savedInfo')) ?? [];
    
    savedInfo.push({title, color, rating, date});
    
    localStorage.setItem('savedInfo', JSON.stringify(savedInfo));
    
    closeSavingOptions();

}

function loadBeat(index){
    rows = JSON.parse(localStorage.getItem('savedBeat'))[index];
    console.log(JSON.parse(localStorage.getItem('savedBeat'))[index]);
    
    /*
    synths = JSON.parse(localStorage.getItem('savedSynths'))[index];
    scaleOfNotes = JSON.parse(localStorage.getItem('savedNotes'))[index];
    */
   updateSEQ();
}
function updateSEQ(){

    for(let note = 0; note < 16; note++){
        for(let row = 0; row < 8; row++){
            if(rows[row][note].active){
                document.getElementsByClassName("notes")[row*16 + note].classList.add("active");
            }else{
                document.getElementsByClassName("notes")[row*16 + note].classList.remove("active");
            }
        }
    }
   
}

function displaySavingOptions(){
    document.getElementById("main").innerHTML += `
    <div id="savingOptions">
        <h1>Enter Informations</h1>
        <p>Enter Beat Title</p>
        <input type="text" id="titleInput" value="myBeat">
        <p>selct cover color</p>
        <input type="color" id="colorInput">
        <p>rate this Beat</p>
         <p id="ratingDisplay"></p>
            <input type="range" id="ratingInput" step="0.5" min="0" max="5"  oninput="updateRating(this.value)">
            <p>date of making:</p>
        <p>${new Date().toDateString()}</p>

    <div id="BTNContainer">
        <div id="closeSavingBTN" onclick="closeSavingOptions()">
            <p>Close</p>
        </div>
        <div id="savingBTN" onclick="saveBeat()">
            <p>Save</p>
        </div>
    </div>

    </div>
    `
}
function closeSavingOptions(){
    document.getElementById("savingOptions").remove();
}

function updateRating(val){
document.getElementById('ratingDisplay').innerHTML = val + " / 5";
}