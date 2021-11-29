const scrape = require('./scrape');
const puppeteer = require('puppeteer');

module.exports = async (query) =>{
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox','--disable-setuid-sandbox']
      })
         try {
        const page = await browser.newPage();
        await page.goto(`https://search.yahoo.com/search?p=${query}&fr=yfp-t&fr2=p%3Afp%2Cm%3Asb&ei=UTF-8&fp=1`);
        await page.waitForSelector('#main');
        const events = await scrape(page)
        await browser.close();
        return events;   
    } catch (error) {
        console.log(error)
        throw error
    }

}