/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



var quotes = [
  {
    quote: 'Execute Order 66.',
    source: 'Darth Sidious (Senator Sheev Palpatine)',
    citation: 'Star Wars: Episode III - Revenge of The Sith',
    year: '19 BBY',
    tags: ['Sith', ' Clone Wars']
  },
  {
    quote: 'I don\'t know if you heard but the Empire is gone.',
    source: 'The Mandolorian',
    citation: 'Star Wars: The Mandalorian',
    year: '9 ABY',
    tags: ['Mandalore', ' Post-Empire']
  },
  {
    quote: 'Cal Kestis. How Predictable. Oh yes, I know your name...',
    source: 'Trilla Suduri (The Second Sister)',
    citation: 'Star Wars: Jedi Fallen Order',
    year: '14 BBY',
    tags: ['Inquisitor', ' Order 66', ' Empire']
  },
  {
    quote: 'The force is what gives a Jedi his power. It’s an energy field created by all living things. It surrounds us and penetrates us. It binds the Galaxy together.',
    source: 'Obi-Wan Kenobi',
    citation: 'Star Wars: Episode IV - A New Hope',
    year: '0 BBY/0 ABY',
    tags: ['Jedi', ' Force', ' Empire']
  },
  {
    quote: '[To Darth Vader] I thought I know who you were under that mask. But it\'s impossible. My master could never be so vile.',
    source: 'Ahsoka Tano',
    citation: 'Star Wars: Rebels',
    year: '4 BBY',
    tags: ['Jedi', ' Force', ' Pre-Empire']
  }
];



// Function selects a random quote from array //
function getRandomQuote() {
  // Get random numbers at the length of the array
  var getRandomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[getRandomQuote];
}

getRandomQuote();



// Change Background Color at Random
function changeBackground() {
  var rgbColor1 = Math.floor(Math.random() * 256);
  var rgbColor2 = Math.floor(Math.random() * 256);
  var rgbColor3 = Math.floor(Math.random() * 256);
  
  document.querySelector('body').style.backgroundColor = 'rgb(' +rgbColor1 + ',' + rgbColor2 + ',' + rgbColor3 + ')';
}


// Function prints quoute to the DOM
function printQuote() {
  var quote = getRandomQuote();
  var quoteGenerated = ''
  
  //Add string to variable
  quoteGenerated += '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source;
  

  if (quote.citation) {
    //If the quote has a citation add it to the string
    quoteGenerated += '<span class="citation">' + quote.citation + '</span>';
  }
  
  if (quote.year) {
    //If the quote has a year add it to the string
    quoteGenerated += '<span class="year">' + quote.year + '</span>';
  }

  if (quote.tags) {
    quoteGenerated += '<br><br>Tags: <span class="tags">' + quote.tags + '</span>';
  }
  
  quoteGenerated + '</p>';
  
  document.getElementById('quote-box').innerHTML = quoteGenerated;

  changeBackground();
}

printQuote();

// Change quote every 20 seconds
setInterval(function() {
  printQuote();
}, 20000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);