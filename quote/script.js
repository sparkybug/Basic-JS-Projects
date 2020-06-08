const quotes = [
    {
        name: 'Stephen King',
        quote: 'Get busy living or Get busy dying'
    },
    {
        name: 'Abraham Lincoln',
        quote: 'Life is sweet'
    },
    {
        name: 'Abraham Lincolin',
        quote: 'Im a success today because I had a friend who believed in me and I didnt have the heart to let him down'
    },
    {
        name: 'John F.Kennedy',
        quote: 'Those who dare to fail miserably can achieve greatly'
    },
    {
        name: 'Leonardo Da Vinci',
        quote: 'It had long since came to my attention that people of'+' '+
                'accomplishment rarely sat back and let things hapen to them.'+' '+
                'they went out and happened to things.'
    }
]

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    //console.log(number);
        quoteAuthor.innerHTML = quotes[number].name;
        quote.innerHTML = quotes[number].quote;
}