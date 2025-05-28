//Library Abschnitt
let savedSongs = [];














let slider = document.getElementById('inputBPM')

let notes = Array(64).fill('')
let bpm = 120;
let isPlaying = false;

let num_rows=8;




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
//const rowNames=['Cowbell','Tom','Cymball','Clap','Snare','hiHat','CP','808'];
const rowNames = [
  'Cowbell',
  'Tom',
  'Cymball',
  'Clap',
  'Snare',
  'hiHat',
  'CP',
  '808',

  'Kick',
  'hiHat1',
  'hiHat2',
  'Maracas',
  'Rim',
  'Snare1',
  'Conga',
  'hiHat3',
  'hiHat4',
  'hiHat5',
  'hiHat6',
  'Kick1',
  'Kick2',
  'Kick3',
  'Kick4',
  'Snare2',
  'Snare3',
  'Snare4',
  'Tambourine',
  'Tambourine1'
];


/*
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
  baseUrl: "../sounds/final/", 
}).toDestination();
*/

  const sampler = new Tone.Sampler({
 urls: {
  C1: "Cassette808_BD01.wav",
  D1: "Cassette808_CL_01.wav",
  E1: "Cassette808_CP_01.wav",
  F1: "Cassette808_Cow01.wav",
  G1: "Cassette808_Cym01.wav",
  A1: "Cassette808_HH_01.wav",
  B1: "Cassette808_HHo_01.wav",
  C2: "Cassette808_MA.wav",
  D2: "Cassette808_Rim_01.wav",
  E2: "Cassette808_Snr01.wav",
  F2: "Cassette808_Tom01.wav",
  G2: "Cassette808_conga01.wav",
  A2: "Classic_Hat_10.aif",
  B2: "Classic_Hat_2.aif",
  C3: "Classic_Hat_3.aif",
  D3: "Classic_Hat_6.aif",
  E3: "Classic_Hat_9.aif",
  F3: "Classic_Kick_1.aif",
  G3: "Classic_Kick_10.aif",
  A3: "Classic_Kick_3.aif",
  B3: "Classic_Kick_6.aif",
  C4: "Classic_Kick_7.aif",
  D4: "Classic_Snare_1.aif",
  E4: "Classic_Snare_3.aif",
  F4: "Classic_Snare_4.aif",
  G4: "Classic_Tambrine_1.aif",
  A4: "Classic_Tambrine_2.aif"
},
  baseUrl: "../sounds/final/", 
}).toDestination();

//const scaleOfNotes = [ 'C1','D1', 'A1', 'E2', 'E1', 'G1', 'F2', 'F1',];

const scaleOfNotes = [
  'C1', 'D1', 'A1', 'E2', 'E1', 'G1', 'F2', 'F1',
  'B1', 'C2', 'D2', 'F3', 'G2', 'A2', 'B2',
  'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
  'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'
];


  

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
        if(document.getElementsByClassName("notes")[i*16+ 15].classList.contains("current")){
        document.getElementsByClassName("notes")[i*16+ 15].classList.remove("current")
        }
         document.getElementsByClassName("notes")[i*16+ Math.max(0,beat-1)].classList.remove("current")
        document.getElementsByClassName("notes")[i*16 + beat].classList.add("current")
        
        
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
checkURL();
function checkURL(){
    let params = new URLSearchParams(window.location.search);
    if(params.has('index')){
        
        let index = params.get('index');
        
        loadBeat(index);
    }
   
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
        
<div id="savingOptionsContainer">
<div class="savingOption">
        <p>Enter Beat Title</p>
        <input type="text" id="titleInput" value="myBeat">
</div>
<div class="savingOption">
        <p>selct cover color</p>
        <input type="color" id="colorInput">
</div>
<div class="savingOption">
        <p>rate this Beat</p>
         <p id="ratingDisplay"></p>
            <input type="range" id="ratingInput" step="0.5" min="0" max="5"  oninput="updateRating(this.value)">
</div>
<div class="savingOption">            
            <p>date of making:</p>
        <p>${new Date().toDateString()}</p>
        </div>
</div>
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

function pullInstruments(){
    let boughtItems = JSON.parse(localStorage.getItem('boughtItems')) ?? [];

    console.log("Item pull: ", boughtItems);
    

    if(boughtItems.length > 0){
        addInstrument(boughtItems);
    }
}
function addInstrument(boughtItems){
    for(let i = 0; i<boughtItems.length;i++){
        rows.push( Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[boughtItems[i] + 8], active: false})))
        num_rows++;


    }
}