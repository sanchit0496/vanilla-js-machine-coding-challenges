const images = [
  {
    src: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
    alt: "A beautiful sunrise over the mountains",
    title: "Sunrise in the Mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    alt: "A calm beach with clear blue water",
    title: "Relaxing Beach",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    alt: "A dense forest with towering trees",
    title: "Mystic Forest",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    alt: "A cityscape at night with bright lights",
    title: "City Lights at Night",
  },
  {
    src: "https://images.unsplash.com/photo-1441931423375-cc2d99eebb62",
    alt: "A serene lake surrounded by mountains",
    title: "Peaceful Lake",
  },
];
const imageHolder = document.getElementById("image-holder");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const imageElement = document.createElement("img");
imageHolder.appendChild(imageElement);

let activeIndex = 0;

const updateImage = () => {
  imageElement.src = images[activeIndex].src
  imageElement.alt = images[activeIndex].alt
  imageElement.title = images[activeIndex].title
}

updateImage()

nextButton.addEventListener("click", () => {
  if (activeIndex === images.length - 1) {
    activeIndex = 0;
    updateImage()
  } else {
    activeIndex++;
    updateImage()
  }
});

prevButton.addEventListener("click", () => {
  if (activeIndex === 0) {
    activeIndex = images.length - 1;
    updateImage()
  } else {
    activeIndex--;
    updateImage()
  }
});
