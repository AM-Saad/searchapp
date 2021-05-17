const puppeteer = require('puppeteer');
const scrape = require('./scrape');

module.exports = async (query) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/results?search_query=${query}`);
    await page.waitForSelector('#content');
    const events = await scrape(page)
    await browser.close();
    return events;
}
