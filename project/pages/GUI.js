console.log("GUI");


let root = document.querySelector(':root')

function switchLibraryHeader(){
    console.log('switchHeader');
    
   // document.getElementById('header').style.height = '35vh'
    document.getElementById('header').style = ' height:max-content; display:flex; flex-direction: column; justify-content: space-evenly;'


    //adding: <div class="libCol" id="libCol_base" onclick="changeLibraryBackground('rgba(235, 234, 229)','rgba(13, 3, 51)"></div>
    //and: <div class="cardCol" id="cardCol_base" onclick="changeCardBackground('rgba(235, 234, 229)','rgba(13, 3, 51)')"></div>
    document.getElementById('header').innerHTML=`
    <div id="sortBox" class="headerSettingBox">

    <div class="headerInnerBox">
    <label for="sort">Sort by: </label>
        <select name="sort" id="sortInput">
            <option value="youngest">Youngest</option>
            <option value="oldest">Oldest</option>
            <option value="rating">Rating</option>
        </select>
    </div>

    <div class="headerInnerBox">
    <label for="nameInput">Search for Name: </label>
        <input type="text" placeholder="Song 1" name="nameInput" id="nameInput">    

    </div>

    </div>
     <div id="libraryColorBox" class="headerSettingBox">

     <p>Library Color: </p>
     <div id="colorsContainer">
        <div class="libCol" id="libCol_blue" onclick="changeLibraryBackground('#0000b3','#000099')"></div>
        <div class="libCol" id="libCol_red" onclick="changeLibraryBackground('#b30000','#800000')"></div>
         <div class="libCol" id="libCol_grey" onclick="changeLibraryBackground('#29293f','#29292f')"></div>
        
    </div>

    </div>
     <div id="CardBox" class="headerSettingBox">
     <p>Card Background: </p>
     <div id="colorsContainer">
       <div class="cardCol" id="cardCol_blue" onclick="changeCardBackground('#0000b3','#000099')"></div>
        <div class="cardCol" id="cardCol_red" onclick="changeCardBackground('#b30000','#800000')"></div>
        <div class="cardCol" id="cardCol_grey" onclick="changeCardBackground('#29293f','#29292f')"></div>
        
    </div>

    <p>Rounded Edges: </p>
    <div id="colorsContainer">

    <div class="edgeVal" id="noEdge" onclick="changeBorderRadius(0)"> <p>None</p> </div>
    <div class="edgeVal" id="normalEdge" onclick="changeBorderRadius(10)"> <p>Normal</p> </div>
    <div class="edgeVal" id="bigEdge" onclick="changeBorderRadius(20)"> <p>Large</p> </div>

    </div>
    </div>

    <div id="finishHeaderBTN" onclick="returnLibraryHeader()">
    <p>Finish</p>
    </div>

    `
}

function returnLibraryHeader(){

    document.getElementById('header').style = ' height:25vh;'

    document.getElementById('header').innerHTML=`

    <a href="../index.html">
    <!-- <div class="returnBTN"> -->
    <div class="returnContainer">
     <svg id="polygon1" xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 68 78" fill="none">
         <path d="M0 39L67.5 0.0288544V77.9711L0 39Z" fill="#EBEAE5" />
       </svg>
     <svg id="polygon2" xmlns="http://www.w3.org/2000/svg" width="60" height="70
     " viewBox="0 0 75 88" fill="none">
         <path d="M74.5 86.4352L1 44L74.5 1.56476V86.4352Z" fill="#EBEAE5" stroke="black"/>
       </svg>
 </div></a>

 <h1 onclick="logging()">Library</h1>

 <img src="../img/vinyl.png" alt="settings" id="settingsVinyl" onclick="switchLibraryHeader()">
`
 }

function changeBorderRadius(val){
root.style.setProperty(`--borderRadius` , `${val}px`)
}

function changeCardBackground(val1,val2){
root.style.setProperty(`--cardBackground` , `linear-gradient( ${val1}, ${val2})`)
}

function changeLibraryBackground(val1,val2){
    root.style.setProperty(`--backgroundImage` , `linear-gradient( ${val1}, ${val2})`)
}


displayAllShopItems();

function displayAllShopItems(){
let s = "";

for(let i = 0; i< shopItems.length;i++){
    s+=`
    <div class="shopItem" id="shopItem${i}">
        <div class="itemSymbol" id="itemSymbol${i}">
            <img src="${shopItems[i].cover}" alt="icon">
        </div>
        <h2 class="itemName">${shopItems[i].title}</h2>
        <div class="buyBTN">
            <p class="itemPrice">${shopItems[i].price} $$</p>
        </div>
    </div>    
    `
    console.log(`itemSymbol${i}`);
    
   
}

document.getElementById('content').innerHTML = s;


for(let i = 0; i< shopItems.length;i++){
document.getElementById(`itemSymbol${i}`).style.backgroundColor = `${shopItems[i].color}`;
}
}





