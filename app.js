const btn = document.querySelector('#new-quote');
const quotePrinted = document.querySelector('#quote');
const authorPrinted = document.querySelector('#author');

const quoteArray = [{
  quote: "'To live is the rarest thing in the world. Most people exist, that is all.'",
  author: " - Oscar Wilde"
}, {
  quote: "'That it will never come again is what makes life so sweet.'",
  author: " - Emily Dickinson"
}, {
  quote: "'It is never too late to be what you might have been.'",
  author: " - George Eliot"
}, {
  quote: "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'",
  author: " - Ralph Waldo Emerson"
}, {
  quote: "'Pain is inevitable. Suffering is optional.'",
  author: " - Haruki Murakami"
}, {
  quote: "All the world's a stage, and all the men and women merely players.'",
  author: " - William Shakespeare"
}, {
  quote: "'Be kind, for everyone you meet is fighting a hard battle.'",
  author: " - Plato"
}, {
  quote: "'Don't let your happiness depend on something you may lose.'",
  author: " - C.S. Lewis"
}, {
  quote: "'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.'",
  author: " - Voltaire"
}, {
  quote: "'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.'",
  author: " - Stephen King"
}];

btn.addEventListener("mouseover", function() {
  const button = document.getElementById('new-quote');
  button.style.boxShadow = "3px 3px 4px rgba(0, 0, 0, 0.2)";
  button.style.backgroundColor = "rgb(25, 111, 225)";
})
btn.addEventListener("mouseout", function() {
  const button = document.getElementById('new-quote');
  button.style.boxShadow = "none";
  button.style.backgroundColor = "rgba(41, 129, 246)";
})

btn.addEventListener('click', function() {
  let randomNumber = Math.floor(Math.random() * quoteArray.length);

  quotePrinted.innerText = quoteArray[randomNumber].quote;
  authorPrinted.innerText = quoteArray[randomNumber].author;
})