const polygonData={
    returnLink: "../index.html",
      polygons: [
        {
          id: "polygon1",
          width: 45,
          height: 55,
          viewBox: "0 0 68 78",
          path: {
            d: "M0 39L67.5 0.0288544V77.9711L0 39Z",
            fill: "#EBEAE5"
          }
        },
        {
          id: "polygon2",
          width: 55,
          height: 65,
          viewBox: "0 0 75 88",
          path: {
            d: "M74.5 86.4352L1 44L74.5 1.56476V86.4352Z",
            fill: "#EBEAE5",
            stroke: "black"
          }
        }
      ],
}





displayStart()


function displayStart(){

let h = "";

h+=`
 
<a href="${polygonData.returnLink}">
          <div class="returnContainer">
            ${polygonData.polygons.map(polygon => `
              <svg id="${polygon.id}" xmlns="http://www.w3.org/2000/svg"
                width="${polygon.width}" height="${polygon.height}"
                viewBox="${polygon.viewBox}" fill="none">
                <path d="${polygon.path.d}" fill="${polygon.path.fill}"
                  ${polygon.path.stroke ? `stroke="${polygon.path.stroke}"` : ''}/>
              </svg>
            `).join('')}
          </div>
        </a>


        <div id="controls">
            <div id="BPMBox"  >  
                <input type="range" id="inputBPM" min="50" max="300" value="120" >
                <label id="BPMLabel" for="inputBPM"> 120 BPM</label>
            </div>
            
            <div id="playButton">
              <img src="../img/playButton2.png">
            </div>

            <div id="headerBTNContainer">

              <div id="clearBTN" onclick="clearBeat()">
               <p>clear</p>
              </div>   
        
              <div id="saveBTN" onclick="displaySavingOptions()">
                <p>Save</p>
              </div>   
           </div>

        </div>

`
document.getElementById('header').innerHTML = h;


    let m = "";

    m+='<div id="SEQ_Container">'


    for(let r = 0; r<8;r++){
      m+=`<div class="rowLabel"></div>
      `
      for(let n= 0; n<16;n++){
        m+=`
        <div class="notes ${ n%4 ? '':'firstBeatOfBar'} " ></div>
        `
      }

    }

    /*
    for(let i = 0; i<64;i++){
        
    }
*/


    m+='</div>'

    document.getElementById('main').innerHTML = m;
}