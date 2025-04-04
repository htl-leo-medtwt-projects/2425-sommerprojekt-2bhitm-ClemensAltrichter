let root = document.querySelector(':root')

function switchLibraryHeader(){
    console.log('switchHeader');
    
   // document.getElementById('header').style.height = '35vh'
    document.getElementById('header').style = ' height:max-content; display:flex; flex-direction: column; justify-content: space-evenly;'

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
        <div class="libCol" id="libCol_blue"></div>
        <div class="libCol" id="libCol_red"></div>
        <div class="libCol" id="libCol_grey"></div>
    </div>

    </div>
     <div id="CardBox" class="headerSettingBox">
     <p>Card Color: </p>
     <div id="colorsContainer">
       <div class="cardCol" id="cardCol_blue"></div>
        <div class="cardCol" id="cardCol_red"></div>
        <div class="cardCol" id="cardCol_grey"></div>
    </div>

    <p>Rounded Edges: </p>
    <div id="colorsContainer">

    <div class="edgeVal" id="noEdge" onclick="changeBorderRadius(0)"> <p>None</p> </div>
    <div class="edgeVal" id="normalEdge" onclick="changeBorderRadius(10)"> <p>Normal</p> </div>
    <div class="edgeVal" id="bigEdge" onclick="changeBorderRadius(20)"> <p>Large</p> </div>

    </div>
    </div>

    <div id="finishHeaderBTN">
    <p>Finish</p>
    </div>

    `
}

function changeBorderRadius(val){
    this.style = 'background-color: white; color; black;'
root.style = `--borderRadius: ${val}px`
}