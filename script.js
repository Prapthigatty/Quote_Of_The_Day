const quotes = [
  "Believe in yourself!",
  "Push yourself, because no one else is going to do it for you.",
  "The future depends on what you do today.",
  "Dream big and dare to fail.",
  "Every day is a second chance.",
  "The best time to start was yesterday. The next best time is now.",
  "Doubt kills more dreams than failure ever will.",
  "Small steps every day lead to big results."
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

function copyQuote() {
  const quoteText = document.getElementById("quote").textContent;
  navigator.clipboard.writeText(quoteText).then(() => {
    alert("Quote copied to clipboard!");
  });
}

function shareQuote() {
  const quoteText = document.getElementById("quote").textContent;
  const encodedText = encodeURIComponent(quoteText);
  const whatsappURL = `https://wa.me/?text=${encodedText}`;
  window.open(whatsappURL, "_blank");
}

// Load first quote on page load
window.onload = getQuote;
