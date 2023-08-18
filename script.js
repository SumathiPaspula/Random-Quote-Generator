const heading = document.getElementById('heading');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const getQouteBtn = document.getElementById('get-quote-btn');

const APP_NAME = 'Randon Quote Generator';
const quotesAPI = 'https://api.quotable.io/random';

function start(){
    heading.innerText = APP_NAME;
    getQuote();
}

getQouteBtn.addEventListener('click', getQuote);

async function getQuote(){
    try {
        quote.innerText = "updating...";
        author.innerText = "updating...";
        getQouteBtn.innerText = "loading...";
        getQouteBtn.disabled = true;

        const response = await fetch(quotesAPI);
        const obj = await response.json();

        quote.innerText = obj.content;
        author.innerText = `- ${obj.author}`;
        getQouteBtn.innerText = "Get quote";
        getQouteBtn.disabled = false;
    } 
    catch (error) {
        quote.innerText = "An error occured, try again later.";
        author.innerText = ``;
        getQouteBtn.innerText = "Get quote";
        getQouteBtn.disabled = false;
    }
}

start();