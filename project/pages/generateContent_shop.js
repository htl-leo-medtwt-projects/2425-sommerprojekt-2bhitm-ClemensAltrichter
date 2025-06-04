const shopPageData = {
    headerBox: {
      title: "Shop",
      currency: "9999+ $$"
    },
    sideMenu: {
      returnLink: "../index.html",
      polygons: [
        {
          id: "polygon1",
          width: 46,
          height: 61,
          viewBox: "0 0 68 78",
          d: "M0 39L67.5 0.0288544V77.9711L0 39Z",
          fill: "#EBEAE5"
        },
        {
          width: 59,
          height: 66,
          viewBox: "0 0 75 88",
          d: "M74.5 86.4352L1 44L74.5 1.56476V86.4352Z",
          fill: "#EBEAE5",
          stroke: "black"
        }
      ],
      menuOptions: [
        "Menu Option 1",
        "Categorys",
        "Menu Option 3",
        "Menu Option 4"
      ]
    }
  };

  
  function generateShopPage(data) {
    document.body.innerHTML = `
      <div id="headerBox">
        <h1 id="title">${data.headerBox.title}</h1>
        <p id="currencyDisplay">${data.headerBox.currency}</p>
      </div>
  
      <div id="sideMenu">
        <a href="${data.sideMenu.returnLink}">
          <div class="returnContainer">
            ${data.sideMenu.polygons.map(p => `
              <svg ${p.id ? `id="${p.id}"` : ""} xmlns="http://www.w3.org/2000/svg"
                width="${p.width}" height="${p.height}" viewBox="${p.viewBox}" fill="none">
                <path d="${p.d}" fill="${p.fill}" ${p.stroke ? `stroke="${p.stroke}"` : ""} />
              </svg>
            `).join('')}
          </div>
        </a>
       <!-- ${data.sideMenu.menuOptions.map(opt => `<h1>${opt}</h1>`).join('')} -->
        <p id="sideDescription">The shop page allows you to browse and purchase new instruments or features for your music project. Your current currency balance is displayed at the top. Use the menu to explore different options and return to the main page at any time. All available items and categories will appear in the main area, making it easy to upgrade your creative toolkit.</p>
      </div>
  
      <div id="mainContainer">
        <div id="content"></div>
      </div>
    `;
  }
  
  // Page generieren
  generateShopPage(shopPageData);
  