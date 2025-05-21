

let savedSongs = [];

savedSongs.push({
    title: "Song1",
    cover: "../img/vinyl-icon.jpg",
    date: "2023-10-01",
    rating: 4.5,
    color: "blue",
    id: 0
});

pullSongs();
function pullSongs(){
    savedSongs = JSON.parse(localStorage.getItem('savedBeat')) ?? [];
    
    console.log("E:",savedSongs);
}


let savedInfo = [];

pullInfo();

function pullInfo(){
    savedInfo = JSON.parse(localStorage.getItem('savedInfo')) ?? [];
    console.log("F:",savedInfo);
}
