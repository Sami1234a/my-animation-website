document.querySelectorAll(".pricing-item").forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Stronger 3D effect with larger rotation angles
    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;

    // Apply the 3D rotation
    item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  item.addEventListener("mouseleave", () => {
    // Reset the rotation when the cursor leaves
    item.style.transform = "rotateX(0) rotateY(0)";
  });
});
