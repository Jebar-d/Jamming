function quotes(quoteDisplayElement) {
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "The future belongs to those who believe in the beauty of their dreams."
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    quoteDisplayElement.textContent = randomQuote;
}

export { quotes };