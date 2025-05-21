const libraryData = {
    header: {
      returnLink: "../index.html",
      polygons: [
        {
          id: "polygon1",
          width: 50,
          height: 60,
          viewBox: "0 0 68 78",
          path: {
            d: "M0 39L67.5 0.0288544V77.9711L0 39Z",
            fill: "#EBEAE5"
          }
        },
        {
          id: "polygon2",
          width: 60,
          height: 70,
          viewBox: "0 0 75 88",
          path: {
            d: "M74.5 86.4352L1 44L74.5 1.56476V86.4352Z",
            fill: "#EBEAE5",
            stroke: "black"
          }
        }
      ],
      title: "Library",
      settingsIcon: {
        src: "../img/vinyl.png",
        alt: "settings",
        id: "settingsVinyl",
        onclick: "switchLibraryHeader()"
      }
    },
    content: {
      grid: [
        {
          cover: "../img/vinyl-icon.jpg",
          
          title: "Song 1",
          rating: "rating",
          date: "date"
        },
        //{}, {}, {}, {} // leere Karten
      ]
    }
  };


  function createLibraryPage(data) {
    // Header erzeugen
    const headerHTML = `
      <div id="header">
        <a href="${data.header.returnLink}">
          <div class="returnContainer">
            ${data.header.polygons.map(polygon => `
              <svg id="${polygon.id}" xmlns="http://www.w3.org/2000/svg"
                width="${polygon.width}" height="${polygon.height}"
                viewBox="${polygon.viewBox}" fill="none">
                <path d="${polygon.path.d}" fill="${polygon.path.fill}"
                  ${polygon.path.stroke ? `stroke="${polygon.path.stroke}"` : ''}/>
              </svg>
            `).join('')}
          </div>
        </a>
        <h1 onclick="logging()">${data.header.title}</h1>
        <img src="${data.header.settingsIcon.src}" alt="${data.header.settingsIcon.alt}"
          id="${data.header.settingsIcon.id}" onclick="${data.header.settingsIcon.onclick}">
      </div>
    `;
  
    // BeatCards erzeugen
    /*
    const gridHTML = data.content.grid.map(item => {
      if (!item.cover) return `<div class="beatCard"></div>`; // leere Card
      return `
        <div class="beatCard">
          <div class="cover">
            <img src="${item.cover}" alt="icon">
          </div>
          <p class="title">${item.title}</p>
          <p>${item.rating}</p>
          <p class="date">${item.date}</p>
        </div>
      `;
    }).join('');
    */
/*
    let gridHTML = "";
    for(let i = 0; i<libraryData.content.grid.length;i++){
      if (!libraryData.content.grid[i].cover) {
        gridHTML += `<div class="beatCard"></div>`; // leere Card
      } else {
        gridHTML += `
          <div class="beatCard" onclick="displayInfoBox(${i})">
            <div class="cover">
              <img src="${libraryData.content.grid[i].cover}" alt="icon">
            </div>
            <p class="title">${libraryData.content.grid[i].title}</p>
            <p class="rating">${libraryData.content.grid[i].rating}</p>
            <p class="date">${libraryData.content.grid[i].date}</p>
          </div>
        `;
      }
    }

    */
   let gridHTML = "";
    for(let i = 0; i<savedSongs.length;i++){
      console.log("savedsongs" , savedSongs[i]);
      console.log("savedinfo" , savedInfo[i]);
      
      /*
      if (!libraryData.content.grid[i].cover) {
        gridHTML += `<div class="beatCard"></div>`; // leere Card
      } else {
       */
        gridHTML += `
          <div class="beatCard" onclick="displayInfoBox(${i})">
            <div class="cover" style="background-color:${savedInfo[i].color}">
              <img src="../img/vinyl-icon.jpg" alt="icon">
            </div>
            <p class="title">${savedInfo[i].title}</p>
            <p class="rating">${savedInfo[i].rating}</p>
            <p class="date">${savedInfo[i].date}</p>
          </div>
        `;
     // }
    }


  
    const contentHTML = `
      <div id="content">
        <div id="grid">
          ${gridHTML}
        </div>
      </div>
    `;
  
    // Alles in die Seite schreiben
    document.getElementById('libraryOutput').innerHTML = headerHTML + contentHTML;
  }
  
  // Seite aufbauen
  createLibraryPage(libraryData);
  
  

