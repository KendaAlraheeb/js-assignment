var quotes = [
    "“Be yourself; everyone else is already taken.”― Oscar Wilde ",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe ",
    "“So many books, so little time.”― Frank Zappa ",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein ",
    "“A room without books is like a body without a soul.”― Marcus Tullius Cicero ",
    "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.― William W. Purkey "
];

function loadRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteShow").innerText= quotes[randomIndex];
}