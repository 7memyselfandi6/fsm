const cards = Array.from(document.querySelectorAll(".union-card"));
const template = cards.find((c) => c.children.length > 0);

if (template) {
  const markup = template.innerHTML;
  cards.forEach((card) => {
    if (card === template) {
      return;
    }
    if (card.children.length === 0) {
      card.innerHTML = markup;
    }
  });
}
