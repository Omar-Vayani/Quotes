fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
  .then((result) => result.json())
  .then((data) => console.log(data.data[0].quoteText));
