function handleScroll() {
  const elements = document.querySelectorAll(".rating-point div");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (
      elementTop < windowHeight - 150 &&
      !element.classList.contains("show")
    ) {
      element.classList.add("show");
      startCounting(element.querySelector("h2"));
    }
  });
}

function startCounting(element) {
  const target = parseInt(element.textContent.replace(/,/g, ""));
  let count = 0;
  const increment = target / 100; // Adjust the counting speed here
  let interval;

  function updateCount() {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    element.textContent = Math.floor(count).toLocaleString();
  }

  interval = setInterval(updateCount, 20); // Adjust the speed of the counting effect
}

// Initial call to handle scroll for the first time
handleScroll();

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);

//
