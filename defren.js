function handleScroll() {
  const items = document.querySelectorAll(".another-service");
  const windowHeight = window.innerHeight;

  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight - 150) {
      item.classList.add("show");
    }
  });

  // Remove event listener after all items are visible
  const allVisible = Array.from(items).every((item) =>
    item.classList.contains("show")
  );
  if (allVisible) {
    window.removeEventListener("scroll", handleScroll);
  }
}

// Initial call to handle scroll for the first time
handleScroll();

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);
