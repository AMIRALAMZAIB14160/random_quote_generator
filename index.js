// Array of predefined quotes
const quotes = [
    "Be like a diamond, precious and rare, not like a stone, found everywhere",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "The mind is everything. What you think you become. - Buddha",
    "Speak only when your words are more beautiful than the silence.",
    "Taking pains to remove the pains of others is the true essence of generosity.” – Abu Bakr (R.A)",
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller"
  ];
  

  function generateQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
 
  const quoteElement = document.getElementById("quote"); 
  if (quoteElement) {
    quoteElement.textContent = generateQuote();
  }