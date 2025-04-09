const landingPageData = {
    nav: [
      { text: "Library", onClick: "toLibrary()" },
      { text: "Produce", onClick: null },
      { text: "Shop", onClick: "toShop()" }
    ],
    title: "SEQ - BEATZ",
    description:
      "Willkommen bei SEQ - Beatz einem Webbasieren Audiosequencer der Ihnen individuelle Möglichkeiten bietet ihre Produktion, Erweiterung und Organisierung von Loops zu verbessern",
    buttons: [
      { id: "tutorialBTN", text: "learn the Basics", onClick: "toTutorial()" },
      { id: "skipBTN", text: "skip Explanaition", onClick: null }
    ],
    vinylSrc: "img/vinyl.png"
  };

  function generateLandingPage(data) {
    // Nav erstellen
    const nav = document.createElement("div");
    nav.id = "nav";
    data.nav.forEach(opt => {
      const navDiv = document.createElement("div");
      navDiv.className = "navOpt";
      if (opt.onClick) navDiv.setAttribute("onclick", opt.onClick);
      navDiv.innerHTML = `<p>${opt.text}</p>`;
      nav.appendChild(navDiv);
    });
  
    // Layout
    const layout = document.createElement("div");
    layout.id = "landingLayout";
    layout.innerHTML = `
      <h1 id="title">${data.title}</h1>
      <div id="landingDescription">
        <p>${data.description}</p>
      </div>
      <div id="landingBTNs">
        ${data.buttons.map(btn => `
          <div id="${btn.id}" class="landingBTN" ${btn.onClick ? `onclick="${btn.onClick}"` : ""}>
            <p>${btn.text}</p>
          </div>
        `).join('')}
      </div>
      <img src="${data.vinylSrc}" alt="" id="landingVinyl">
    `;
  
    // Seite einfügen
    document.body.innerHTML = ''; // Optional: clear body
    document.body.appendChild(nav);
    document.body.appendChild(layout);
  }

  generateLandingPage(landingPageData)