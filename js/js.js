//Modal script
//Finds related buttons and adds event listeners
const CVButton = document.getElementById("CVButton");
CVButton.addEventListener("click", showInfo);
const NumbersGame = document.getElementById("NumbersGame");
NumbersGame.addEventListener("click", showInfo);
const projectModalAttacher = document.getElementById("projectModalAttacher");
const Blank1 = document.getElementById("BlankItem1");
Blank1.addEventListener("click", showInfo);
const Blank2 = document.getElementById("BlankItem2");
Blank2.addEventListener("click", showInfo);

//This boolean is more of a safety precaution than anything else.
let showWindow = false;

function showInfo() {
  if (showWindow === false) {
    showWindow = true;
    //Creates the transparent background around the modal box
    let transparentBackground = document.createElement("div");
    transparentBackground.style.backgroundColor = "rgba(0,0,0,0.7";
    transparentBackground.style.width = "100vw";
    transparentBackground.style.height = "100vh";
    transparentBackground.style.zIndex = "8";
    transparentBackground.style.position = "fixed";
    transparentBackground.style.top = "0px";
    transparentBackground.style.display = "flex";
    transparentBackground.style.justifyContent = "center";
    transparentBackground.style.alignItems = "center";
    //Attaches the modal to the parent element of the button or the button would show as being hovered when hovering the modal area.
    projectModalAttacher.appendChild(transparentBackground);

    //Creates the actual modal window and attaches it to the background div which will center it on the screen.
    let infoWindow = document.createElement("section");
    infoWindow.id = "infoWindow";
    infoWindow.style.maxWidth = "500px";
    infoWindow.style.height = "300px";
    infoWindow.style.backgroundColor = "white";
    infoWindow.style.zIndex = "8";
    infoWindow.style.position = "fixed";
    infoWindow.style.display = "flex";
    infoWindow.style.flexDirection = "column";
    infoWindow.style.alignItems = "flex-end";
    infoWindow.style.margin = "0.5rem 1rem";
    transparentBackground.appendChild(infoWindow);

    //Creates the button and its background and attaches it to the modal window.
    let closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.textContent = "X";
    closeButton.style.fontSize = "1.5rem";
    closeButton.style.background = "none";
    closeButton.style.backgroundColor = "teal";
    closeButton.style.padding = "0.5rem 1rem";
    closeButton.style.width = "100%";
    closeButton.style.border = "none";
    closeButton.style.textAlign = "end";
    infoWindow.appendChild(closeButton);
    //Adds an event listener to the button so it can be closed.
    closeButton.addEventListener("click", function () {
      closeWindow();
    });
    //The other else if statements are identical with different text content/links.
    //Only this initial if-statement will get an explanation.

    //First it determines the content based on the button's ID.
    if (this.id === "CVButton") {
      //Creates a div to store the information and to center the content while text button can remain tucked to the side.
      //It covers the info window and centers the content.
      let infoDiv = document.createElement("article");
      infoDiv.style.display = "flex";
      infoDiv.style.flexDirection = "row";
      infoDiv.style.width = "100%";
      infoDiv.style.height = "100%";
      infoDiv.style.padding = "0.5rem 1rem";
      infoWindow.appendChild(infoDiv);

      //Creates a p tag to explain what the project is about.
      let cvInfo = document.createElement("p");
      cvInfo.textContent =
        "CV sida är just denna sida du är på nu. Det är ett projekt som var den första stora uppgiften på Chas Academys Fullstack Javascript program. Ni kan nå den faktiska CV delen av sidan: ";
      cvInfo.style.fontSize = "1.3rem";

      //Append it to the div (div - info)
      infoDiv.appendChild(cvInfo);

      //Creates the link that leads to the actual project.
      let cvLink = document.createElement("a");
      cvLink.href = "/cv.html";

      //A seemingly complicated solution to a simple problem.
      //Apprently styles created via JS takes precidence over style rules in a .css document as they count as inline styling so a:hover doesn't work(?)
      cvLink.style.color = "black";
      cvLink.onmouseover = function () {
        cvLink.style.color = "red";
      };
      cvLink.onmouseleave = function () {
        cvLink.style.color = "black";
      };

      //Creates the clickable text for the link.
      let testLink = document.createTextNode("här");

      //Appends the clickable text to the link.
      cvLink.appendChild(testLink);

      //Appends the link to the paragraph (div - info - a)
      cvInfo.appendChild(cvLink);
    } else if (this.id === "NumbersGame") {
      let infoDiv = document.createElement("article");
      infoDiv.style.display = "flex";
      infoDiv.style.flexDirection = "row";
      infoDiv.style.width = "100%";
      infoDiv.style.height = "100%";
      infoDiv.style.padding = "0.5rem 1rem";
      infoWindow.appendChild(infoDiv);
      let cvInfo = document.createElement("p");
      cvInfo.textContent =
        "Litet JavaScript projekt som gjordes under CodeJam 2023. Målet med spelet är att man ska gissa ett tal från 1-100 på fem försök. Spelet kommer säga om din gisning är för hög eller för låg. Ni kan nå spelet: ";
      cvInfo.style.fontSize = "1.3rem";
      infoDiv.appendChild(cvInfo);
      let cvLink = document.createElement("a");
      cvLink.href =
        "https://chargermaster.github.io/Code_Jam_20203-_NumberGame/";
      cvLink.target = "_blank";
      cvLink.style.color = "black";
      cvLink.onmouseover = function () {
        cvLink.style.color = "red";
      };
      cvLink.onmouseleave = function () {
        cvLink.style.color = "black";
      };
      let testLink = document.createTextNode("här");
      cvLink.appendChild(testLink);
      cvInfo.appendChild(cvLink);
    } else if (this.id === "BlankItem1") {
      let infoDiv = document.createElement("article");
      infoDiv.style.display = "flex";
      infoDiv.style.flexDirection = "row";
      infoDiv.style.width = "100%";
      infoDiv.style.height = "100%";
      infoDiv.style.padding = "0.5rem 1rem";
      infoWindow.appendChild(infoDiv);
      let cvInfo = document.createElement("p");
      cvInfo.textContent =
        "Denna ruta kommer ha sitt egna projekt i framtiden. Se fram emot det!";
      cvInfo.style.fontSize = "1.3rem";
      infoDiv.appendChild(cvInfo);
      // let cvLink = document.createElement("a");
      // cvLink.href =
      //   "https://chargermaster.github.io/Code_Jam_20203-_NumberGame/";
      // cvLink.target = "_blank";
      // cvLink.style.color = "black";
      // cvLink.onmouseover = function () {
      //   cvLink.style.color = "red";
      // };
      // cvLink.onmouseleave = function () {
      //   cvLink.style.color = "black";
      // };
      // let testLink = document.createTextNode("här");
      // cvLink.appendChild(testLink);
      // cvInfo.appendChild(cvLink);
    } else if (this.id === "BlankItem2") {
      let infoDiv = document.createElement("article");
      infoDiv.style.display = "flex";
      infoDiv.style.flexDirection = "row";
      infoDiv.style.width = "100%";
      infoDiv.style.height = "100%";
      infoDiv.style.padding = "0.5rem 1rem";
      infoWindow.appendChild(infoDiv);
      let cvInfo = document.createElement("p");
      cvInfo.textContent =
        "Denna ruta kommer ha sitt egna projekt i framtiden. Se fram emot det!";
      cvInfo.style.fontSize = "1.3rem";
      infoDiv.appendChild(cvInfo);
      // let cvLink = document.createElement("a");
      // cvLink.href =
      //   "https://chargermaster.github.io/Code_Jam_20203-_NumberGame/";
      // cvLink.target = "_blank";
      // cvLink.style.color = "black";
      // cvLink.onmouseover = function () {
      //   cvLink.style.color = "red";
      // };
      // cvLink.onmouseleave = function () {
      //   cvLink.style.color = "black";
      // };
      // let testLink = document.createTextNode("här");
      // cvLink.appendChild(testLink);
      // cvInfo.appendChild(cvLink);
    }
  }
}

//Simple function that removes the entire modal window and its background.
//As far as I'm aware this would *not* leave junk in memory as the children of the removed element are also removed.
function closeWindow() {
  if (showWindow === true) {
    showWindow = false;
    //Removes last child which should always be the background that the modal is attached to.
    projectModalAttacher.lastChild.remove();
  }
}

//JSON read and write function
const CVContainer = document.getElementById("CvAttachment");
const CVTextContainer = document.getElementById("CvTextContainer");

//JS reader and printer function
async function getCV() {
  const response = await fetch("../json/json.json");
  if (response.ok) {
    const json = await response.json();

    //Adds the header in the outside parent div of the article
    let CVHeader = document.createElement(json.CV[0].Element);
    CVHeader.textContent = json.CV[0].Text;
    CVContainer.appendChild(CVHeader);
    //Re-Appends the article tag inside of the div to the div or the CVHeader will be added to the bottom of its parent element
    CVContainer.appendChild(CVTextContainer);

    //Loops based on how many objects there are in the json file. Skips 0 as the header stays outside.
    for (i = 1; i < Object.keys(json.CV).length; i++) {
      //Creates specified element and adds its text content
      let CVElements = document.createElement(json.CV[i].Element);
      CVElements.textContent = json.CV[i].Text;

      //Checks if the element has a class and adds it
      if (json.CV[i].Class.length > 0) {
        CVElements.classList.add(json.CV[i].Class);
      }

      //Checks if a linebreak is needed
      if (json.CV[i].LineBreaks > 0) {
        //Loop in-case more than one linebreak's needed
        for (j = 0; j < json.CV[i].LineBreaks; j++) {
          let lineBreaks = document.createElement("br");
          CVTextContainer.appendChild(lineBreaks);
        }
      }

      //Appends the text to the relevant container
      CVTextContainer.appendChild(CVElements);
    }

    //adds one final linebreak once finished
    let finalLineBreak = document.createElement("br");
    CVTextContainer.appendChild(finalLineBreak);
  } else {
    console.log("fail");
  }
}
//Ensure's CV's only loaded on the correct page.
if (CVContainer != null && CVTextContainer != null) {
  getCV();
}

//IMPORTED FROM CODEPEN - START

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const navItems = [nav1, nav2, nav3, nav4];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
    //ADDED - Extra function not in the original code as I don't want the menu stuck on screen or the user to be able to scroll.
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  } else {
    //ADDED - Extra function not in the original code as I don't want the menu stuck on screen or the user to be able to scroll.
    window.onscroll = function () {};
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
//END
