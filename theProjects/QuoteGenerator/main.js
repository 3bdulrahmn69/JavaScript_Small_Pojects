let quoteTx = document.querySelector(".quote-text");
let quoteAu = document.querySelector(".quote-author");
let btnG = document.querySelector(".btn");
let cpBtn = document.querySelector(".cp");

cpBtn.textContent = "Copy";

const quotes = [
    ["Oscar Wilde", "“Be yourself; everyone else is already taken.”"],
    ["Marilyn Monroe", "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"],
    ["Albert Einstein", "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"],
    ["Frank Zappa", "“So many books, so little time.”"],
    ["Marcus Tullius Cicero", "“A room without books is like a body without a soul.”"],
    ["Bernard M. Baruch", "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"],
    ["William W. Purkey", "“You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”"],
    ["Mae West", "“You only live once, but if you do it right, once is enough.”"],
    ["Mahatma Gandhi", "“Be the change that you wish to see in the world.”"],
    ["Robert Frost", "“In three words I can sum up everything I've learned about life: it goes on.”"],
    ["Friedrich Nietzsche" , "“Without music, life would be a mistake.”"],
    ["Stephen Chbosky" , "“We accept the love we think we deserve.”"],
    ["Mahatma Gandhi" , "“Live as if you were to die tomorrow. Learn as if you were to live forever.”"],
    ["Ralph Waldo Emerson" , "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"],
    ["Steve Jobs" , "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”"],
    ["Marilyn Monroe" , "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”"],
    ["Elbert Hubbard" , "“A friend is someone who knows all about you and still loves you.”"],
    ["Maya Angelou" , "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”"],
    ["Mark Twain" , "“If you tell the truth, you don't have to remember anything.”"],
];

let index = window.localStorage.getItem("index") || 0;

function displayQuote() {
    quoteTx.textContent = `${quotes[index][1]}`;
    quoteAu.textContent = `- ${quotes[index][0]}`;
    window.localStorage.setItem("index", index);
}

function getRandomIndex() {
    return Math.floor(Math.random() * quotes.length);
}

displayQuote();

btnG.addEventListener("click", function () {
    index = getRandomIndex();
    displayQuote();
});

cpBtn.addEventListener("click", function () {
    const tempInput = document.createElement("input");
    tempInput.value = quoteTx.textContent + " " + quoteAu.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    cpBtn.textContent = "Copied";
    setTimeout(() => {
        cpBtn.textContent = "Copy";
    }, 400);
});
