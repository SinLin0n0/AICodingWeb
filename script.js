import { createCard } from "./components/card.js";

const cardsGrid = document.getElementById("cardsGrid");

async function loadCards() {
  // Fallback data used when fetching JSON fails
  const fallback = Array.from({ length: 9 }, (_, index) => ({
    title: "Thumbnail",
    text:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: `${9 - (index % 3)} mins`,
  }));

  try {
    const res = await fetch("./cards.json", { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderCards(Array.isArray(data) ? data : fallback);
  } catch (err) {
    renderCards(fallback);
  }
}

function renderCards(data) {
  const elements = data.map((item) => createCard(item));
  cardsGrid.replaceChildren(...elements);
}

loadCards();

const toggle = document.querySelector(".menu-toggle");
toggle?.addEventListener("click", () => {
  alert("You can connect this to a sidebar or other interactions");
});
