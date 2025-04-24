let slider = document.getElementById('inputBPM')

let bpm = 120;


console.log(slider);


slider.addEventListener('input', ()=>{
    console.log(slider.value);
    
    bpm = slider.value 
    document.getElementById('BPMLabel').innerHTML = bpm + ' BPM';
})