function handleScroll() {
  const elements = document.querySelectorAll(".cnt-command");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 150) {
      element.classList.add("show");
    }
  });

  // Remove event listener after all elements are visible
  const allVisible = Array.from(elements).every((element) =>
    element.classList.contains("show")
  );
  if (allVisible) {
    window.removeEventListener("scroll", handleScroll);
  }
}

// Initial call to handle scroll for the first time
handleScroll();

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);
