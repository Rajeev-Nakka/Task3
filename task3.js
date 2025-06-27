// Quiz Logic
function checkAnswer(answer) {
  const result = document.getElementById("quiz-result");
  if (answer === "Delhi") {
    result.innerText = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.innerText = "❌ Try again!";
    result.style.color = "red";
  }
}

// Carousel Logic
const images = [
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300"
];
let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("carouselImage");
  img.src = images[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// API Fetch Logic
async function fetchJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  document.getElementById("jokeDisplay").innerText = data.setup + " - " + data.punchline;
}