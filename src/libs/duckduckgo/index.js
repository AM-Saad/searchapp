const puppeteer = require('puppeteer');
const scrape = require('./scrape');

module.exports = async (query) =>{
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox','--disable-setuid-sandbox']
      })
    const page = await browser.newPage();
    await page.goto(`https://duckduckgo.com/?q=${query}&t=h_&ia=web`);
    await page.goto(`https://duckduckgo.com/?q=${query}&t=h_&ia=web`);
    await page.waitForSelector('#links_wrapper');
    const events = await scrape(page)
    await browser.close();
    return events;
}