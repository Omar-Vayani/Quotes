const btn = document.querySelector("button");
const h2 = document.querySelector("h2");

async function getQuote() {
  let quote = await fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  )
    .then((result) => result.json())
    .then((data) => data.data[0]);
  console.log(quote);

  h2.innerHTML = `"${quote.quoteText}"<br>-${quote.quoteAuthor}`;
}

btn.addEventListener("click", () => {
  getQuote();
});
