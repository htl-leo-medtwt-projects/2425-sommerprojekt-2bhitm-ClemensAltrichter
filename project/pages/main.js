import * as Tone from "tone";

let slider = document.getElementById('inputBPM')

let notes = Array(64).fill('')
let bpm = 120;


console.log(slider);


slider.addEventListener('input', ()=>{
    console.log(slider.value);
    
    bpm = slider.value 
    document.getElementById('BPMLabel').innerHTML = bpm + ' BPM';
})

const synths = [
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination()
]

const scaleOfNotes=['C4','D4','Eb4','F4'];


let rows =[
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[3], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[2], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[1], active: false})),
    Array.from({length: 16}, (_,i) => ({note: scaleOfNotes[0], active: false})),

]

