//Modal script
const projectButton = document.getElementById("projectButton");
projectButton.addEventListener("click", showInfo);
const projectModalAttacher = document.getElementById("projectModalAttacher");

let showWindow = false;

function showInfo() {
  if (showWindow === false) {
    showWindow = true;
    console.log(this.id);
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
    projectModalAttacher.appendChild(transparentBackground);

    let infoWindow = document.createElement("div");
    infoWindow.id = "infoWindow";
    infoWindow.style.width = "500px";
    infoWindow.style.height = "300px";
    infoWindow.style.backgroundColor = "white";
    infoWindow.style.zIndex = "8";
    infoWindow.style.position = "fixed";
    infoWindow.style.display = "flex";
    infoWindow.style.flexDirection = "column";
    infoWindow.style.alignItems = "flex-end";
    infoWindow.style.padding = "0.5rem 1rem";
    transparentBackground.appendChild(infoWindow);

    let closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.textContent = "X";
    closeButton.style.fontSize = "1.5rem";
    closeButton.style.background = "none";
    closeButton.style.border = "none";

    infoWindow.appendChild(closeButton);
    closeButton.addEventListener("click", function () {
      closeWindow();
    });
  }
}

function closeWindow() {
  if (showWindow === true) {
    showWindow = false;
    projectModalAttacher.lastChild.remove();

    // projectModalAttacher.removeChild(infoWindow);
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
  } else {
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
