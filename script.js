const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  const card = document.querySelector(".card");

  const x = Math.random() * (card.clientWidth - noBtn.clientWidth);
  const y = Math.random() * (card.clientHeight - noBtn.clientHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
