const data = [
  {
    title: "Accordion Item 1",
    content: "This is the content for item 1.",
  },
  {
    title: "Accordion Item 2",
    content: "This is the content for item 2.",
  },
  {
    title: "Accordion Item 3",
    content: "This is the content for item 3.",
  },
  {
    title: "Accordion Item 4",
    content: "This is the content for item 4.",
  },
];

const accordionContainer = document.getElementById("accordion");

data.forEach((item) => {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");

  const accordionHeader = document.createElement("div");
  accordionHeader.classList.add("accordion-header");
  accordionHeader.textContent = item.title;

  accordionHeader.addEventListener("click", () => {
    let content = accordionItem.querySelector(".accordion-body");
    content.classList.toggle("active");
  });

  const accordionBody = document.createElement("div");
  accordionBody.classList.add("accordion-body");
  accordionBody.textContent = item.content;

  accordionItem.appendChild(accordionHeader);
  accordionItem.appendChild(accordionBody);

  accordionContainer.appendChild(accordionItem);
});
