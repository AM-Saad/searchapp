const scrape = require('./scrape');
const puppeteer = require('puppeteer');

module.exports = async (query) =>{
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox','--disable-setuid-sandbox']
      })
    const page = await browser.newPage();
    await page.goto(`https://www.bing.com/search?q=${query}&go=Search&qs=ds&form=QBRE`);
    await page.goto(`https://www.bing.com/search?q=${query}&go=Search&qs=ds&form=QBRE`);
    await page.waitForSelector('#b_content');
    const events = await scrape(page)
    await browser.close();
    return events;
}