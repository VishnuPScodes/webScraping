import axios from "axios";
import * as cheerio from "cheerio"; // Correct way to import cheerio in ESM

const scrapeWebsite = async (url) => {
  try {
    // Fetch the HTML content of the website
    const { data: html } = await axios.get(url);

    // Load the HTML into cheerio for easy parsing
    const $ = cheerio.load(html);

    // Scraping all links from a page using arrow function and array methods
    const links = $("a")
      .map((_, element) => ({
        text: $(element).text(),
        href: $(element).attr("href"),
      }))
      .get()
      .filter((link) => link.href);

    // Scraping titles of articles using arrow function
    const titles = $("h2")
      .map((_, element) => $(element).text())
      .get();

    return { links, titles };
  } catch (error) {
    console.error("Error scraping website:", error);
    throw error;
  }
};

export default scrapeWebsite;
