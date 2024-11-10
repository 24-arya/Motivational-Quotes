const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const tweetBtn = document.querySelector(".tweet_btn");

const apiLink = "https://quotes-api-self.vercel.app/quote";


//global variable
let temp;


//API CALL ---> Async & Await
//Arrow function is used here
const getData = async ()=> {
    const response = await fetch(apiLink);
    const data = await response.json();
    //console.log(data);
    temp = data.quote;
    quote.innerText = data.quote; //put the quote key in quote
    author.innerText = data.author; //put the author key in author
};

//function call
getData();

newQuote.addEventListener("click", ()=>{
    getData();
})

tweetBtn.addEventListener("click", ()=>{
     window.open("https://twitter.com/intent/tweet?text=" + temp) //open a new window
})
