document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // Adjust background positions based on scroll position for each parallax section
  document.querySelector(".parallax-1").style.backgroundPositionY = `${
    scrollPosition * 0.5
  }px`;
  document.querySelector(".parallax-2").style.backgroundPositionY = `${
    scrollPosition * 0.3
  }px`;
  document.querySelector(".parallax-3").style.backgroundPositionY = `${
    scrollPosition * 0.1
  }px`;
});
