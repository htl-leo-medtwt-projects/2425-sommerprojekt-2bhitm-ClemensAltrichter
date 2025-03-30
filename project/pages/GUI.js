function switchLibraryHeader(){
    console.log('switchHeader');
    
    document.getElementById('header').style.height = '35vh'

    document.getElementById('header').innerHTML=`
    <div id="sortBox">

    <label for="sort">Sort by: </label>
        <select name="sort" id="sortInput">
            <option value="youngest">Youngest</option>
            <option value="oldest">Oldest</option>
            <option value="rating">Rating</option>
        </select>

    <label for="nameInput">Search for Name: </label>
        <input type="text" placeholder="Song 1" name="nameInput" id="nameInput">    

    </div>
     <div id="libraryColorBox">

     <p>Library Color: </p>
     <div id="colorsContainer">
        <div></div>
        <div></div>
        <div></div>
    </div>

    </div>
     <div id="CardBox">
     <p>Card Color: </p>
     <div id="colorsContainer">
        <div></div>
        <div></div>
        <div></div>
    </div>

    <p>Rounded Edges: </p>
    
    
    </div>
    `
}

function logging(){
    console.log('hey');
    
}