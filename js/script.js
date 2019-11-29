/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'Execute Order 66.',
    source: 'Darth Sidious (Senator Sheev Palpatine)',
    citation: 'Star Wars: Episode III - Revenge of The Sith',
    year: '19 BBY',
    tags: ['Sith', 'Clone Wars']
  },
  {
    quote: 'I don\'t know if you heard but the Empire is gone.',
    source: 'The Mandolorian',
    citation: 'Star Wars: The Mandalorian',
    year: '9 ABY',
    tags: ['Mandalore', 'Post-Empire']
  },
  {
    quote: 'Cal Kestis. How Predictable. Oh yes, I know your name...',
    source: 'Trilla Suduri (The Second Sister)',
    citation: 'Star Wars: Jedi Fallen Order',
    year: '14 BBY',
    tags: ['Inquisitor', 'Order 66', 'Empire']
  },
  {
    quote: 'The force is what gives a Jedi his power. It’s an energy field created by all living things. It surrounds us and penetrates us. It binds the Galaxy together.',
    source: 'Obi-Wan Kenobi',
    citation: 'Star Wars: Episode IV - A New Hope',
    year: '0 BBY/0 ABY',
    tags: ['Jedi', 'Force', 'Empire']
  },
  {
    quote: '[To Darth Vader] I thought I know who you were under that mask. But it\'s impossible. My master could never be so vile.',
    source: 'Ahsoka Tano',
    citation: 'Star Wars: Rebels',
    year: '4 BBY',
    tags: ['Jedi', 'Force', 'Pre-Empire']
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // Get random numbers at the length of the array
  var getRandomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[getRandomQuote];
}

getRandomQuote();



/***  
 * `printQuote` function
***/
function printQuote() {
  var quote = getRandomQuote();
  var quoteGenerated = ''
  
  //Add string to variable
  quoteGenerated += '<p class="quote">' + quote.quote + '</p>';
  
  if (quote.citation) {
    //If the quote has a citation add it to the string
    quoteGenerated += '<span class="citation">' + quote.citation + '</span>';
  }
  
  if (quote.year) {
    //If the quote has a year add it to the string
    quoteGenerated += '<span class="year">' + quote.year + '</span>';
  }
  
  quoteGenerated + '</p>';
  
  getElementById('')
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);