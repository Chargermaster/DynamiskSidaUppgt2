const test = document.getElementById("CVAttachment");

async function getCV() {
  const response = await fetch("../json/json.json");
  if (response.ok) {
    const json = await response.json();
    //Loops based on how many objects there are in the json file.
    for (i = 0; i < Object.keys(json.CV).length; i++) {
      let testElement = document.createElement(json.CV[i].Element);
      testElement.textContent = "test";
      test.appendChild(testElement);
      console.log(json.CV[i].Element);
    }
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
