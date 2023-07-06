function generate() {
    // creating dictionary to store quotes with respective author name
    var quotes = {
        "― Oscar Wilde": "“Be yourself; everyone else is already taken.”",
        "― Marilyn Monroe": "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        "― Albert Einstein": "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "― Bernard M. Baruch": "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"

    }
    var authors = Object.keys(quotes);
    // console.log(authors);
    var new_author = authors[Math.floor(Math.random() * authors.length)];
    document.getElementsByTagName('h3').innerHTML = quote;
    console.log(new_author);

    var quote = quotes[new_author];
    console.log(quote);

    document.getElementById('origin_quote').innerHTML = quote + " <br>" + new_author;

}