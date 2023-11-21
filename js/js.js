const CVContainer = document.getElementById("CvAttachment");
const CVTextContainer = document.getElementById("CvTextContainer");

async function getCV() {
  const response = await fetch("../json/json.json");
  if (response.ok) {
    const json = await response.json();
    //Adds the header in the outside parent div of the article
    let CVHeader = document.createElement(json.CV[0].Element);
    CVHeader.textContent = json.CV[0].Text;
    CVContainer.appendChild(CVHeader);
    CVContainer.appendChild(CVTextContainer);
    //Loops based on how many objects there are in the json file.
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

getCV();

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
