let homePage = document.getElementById("home-page");
let mainBg = document.getElementById("bg-main");
let headingBg = document.getElementById("bg-heading");
let heroBgFront = document.querySelector(".parallax-sec__bg-hero--front");
let heroBgBack = document.querySelector(".parallax-sec__bg-hero--back");
let header = document.getElementById("header");

homePage.addEventListener("scroll", function () {
    let value = homePage.scrollTop;

    mainBg.style.transform = `translateY(${value * 0.5}px)`;
    heroBgBack.style.transform = `translateY(${value * 0.35}px)`;
    ////////////////////////////////////////////////////////////////
    headingBg.style.transform = `translateY(${value * 0.6}px)`;
    header.style.transform = `translateY(${value * 0.5}px)`;
    //   heroBg.style.transform = `translateY(100px)`;
  
    ////////////////////////////////////////////
    sideNav.style.opacity = "0";
    window.clearTimeout(isScrolling);
  
    isScrolling = setTimeout(function () {
      console.log("Scrolling has stopped.");
      sideNav.style.opacity = "1";
    }, 500);
  });