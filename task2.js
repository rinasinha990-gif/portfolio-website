// Smooth Neon Glow Effect

const cards = document.querySelectorAll(".glass-card");

cards.forEach(card => {

  card.addEventListener("mousemove", () => {
    card.style.boxShadow =
    "0 0 30px rgba(0,255,255,0.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow =
    "0 0 20px rgba(0,255,255,0.2)";
  });

});

// Button Animation

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.08)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });

});