import scrapeWebsite from "./script.js";

scrapeWebsite("https://en.wikipedia.org/wiki/Adolf_Hitler")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("...............", error);
  });
