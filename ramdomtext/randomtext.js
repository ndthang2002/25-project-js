

const quotes = {
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
  }
console.log(quotes["- Erma Bombeck"]);
let generate =function(){
const authors= Object.keys(quotes);
const author = authors[Math.floor(Math.random() * authors.length)];
const qoute = quotes[author];
document.getElementById("quote").textContent= qoute;
document.getElementById("author").innerHTML=author;
}


window.onload= function() {
  generate();
}