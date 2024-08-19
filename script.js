function handleScroll() {
  const cards = document.querySelectorAll(".card");
  const windowHeight = window.innerHeight;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 150) {
      card.classList.add("show");
    }
  });

  // Check if all cards are visible and remove scroll event listener if true
  const allVisible = Array.from(cards).every((card) =>
    card.classList.contains("show")
  );
  if (allVisible) {
    window.removeEventListener("scroll", handleScroll);
  }
}

// Initial call to handle scroll for the first time
handleScroll();

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);
