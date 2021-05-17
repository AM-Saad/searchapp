const puppeteer = require('puppeteer');
const scrape = require('./scrape');

module.exports = async (query) =>{
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox','--disable-setuid-sandbox']
      })
    const page = await browser.newPage();
    await page.goto(`https://www.google.com.eg/search?source=hp&ei=pcDAXJnTBKSQlwTO0KrADA&q=${query}&oq=web+d&gs_l=psy-ab.1.0.0l10.225.1733..2592...0.0..0.172.910.0j6......0....1..gws-wiz.....0..35i39j0i131.0GylEoi5UD8`);
    await page.waitForSelector('#center_col');
    const events = await scrape(page)
    await browser.close();
    return events;
}