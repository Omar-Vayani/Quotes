const btn = document.querySelector("button");
const h2 = document.querySelector("h2");
const cover = document.querySelector(".cover");

async function getQuote() {
  cover.classList.add("active");
  let quote = await fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  )
    .then((result) => result.json())
    .then((data) => data.data[0])
    .catch((err) => err);

  h2.innerHTML = `"${quote.quoteText}"<br>-<i>${quote.quoteAuthor}</i>`;
  cover.classList.remove("active");
}

btn.addEventListener("click", () => {
  getQuote();
});
