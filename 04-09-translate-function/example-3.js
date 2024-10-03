document.getElementById("move-btn").addEventListener("click", () => {
  const randomX = Math.floor(Math.random() * 500);
  const randomY = Math.floor(Math.random() * 500);
  document.getElementById(
    "dynamic-box"
  ).style.transform = `translate(${randomX}px, ${randomY}px)`;
});
