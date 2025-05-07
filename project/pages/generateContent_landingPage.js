const pageStructure = {
    elements: [
      {
        tag: "div",
        id: "nav",
        children: [
          {
            tag: "div",
            class: "navOpt",
            onclick: "toLibrary()",
            children: [{ tag: "p", text: "Library" }]
          },
          {
            tag: "div",
            class: "navOpt",
            onclick: "toProduce()",
            children: [{ tag: "p", text: "Produce" }]
          },
          {
            tag: "div",
            class: "navOpt",
            onclick: "toShop()",
            children: [{ tag: "p", text: "Shop" }]
          }
        ]
      },
      {
        tag: "div",
        id: "landingLayout",
        children: [
          { tag: "h1", id: "title", text: "SEQ - BEATZ" },
          {
            tag: "div",
            id: "landingDescription",
            children: [
              {
                tag: "p",
                text: "Willkommen bei SEQ - Beatz einem webbasierten Audiosequencer der Ihnen individuelle Möglichkeiten bietet, Ihre Produktion, Erweiterung und Organisierung von Loops zu verbessern"
              }
            ]
          },
          {
            tag: "div",
            id: "landingBTNs",
            children: [
              {
                tag: "div",
                id: "tutorialBTN",
                class: "landingBTN",
                onclick: "toTutorial()",
                children: [{ tag: "p", text: "learn the Basics" }]
              },
              {
                tag: "div",
                id: "skipBTN",
                class: "landingBTN",
                children: [{ tag: "p", text: "skip Explanation" }]
              }
            ]
          },
          {
            tag: "img",
            id: "landingVinyl",
            src: "img/vinyl.png",
            alt: ""
          }
        ]
      }
    ]
  };

  


  function createElementFromJSON(json, parent = document.body) {
    json.elements.forEach(el => appendElement(el, parent));
  }
  
  function appendElement(data, parent) {
    const el = document.createElement(data.tag);
  
    if (data.id) el.id = data.id;
    if (data.class) el.className = data.class;
    if (data.text) el.textContent = data.text;
    if (data.onclick) el.setAttribute("onclick", data.onclick);
    if (data.src) el.src = data.src;
    if (data.alt) el.alt = data.alt;
  
    if (data.children) {
      data.children.forEach(child => appendElement(child, el));
    }
  
    parent.appendChild(el);
  }
  