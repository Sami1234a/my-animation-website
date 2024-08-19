function handleScroll() {
  const midea = document.querySelector(".midea");
  const windowHeight = window.innerHeight;
  const mideaTop = midea.getBoundingClientRect().top;

  if (mideaTop < windowHeight - 150) {
    midea.classList.add("show");
  }
}

// Initial call to handle scroll for the first time
handleScroll();

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);
