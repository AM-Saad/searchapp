const Event = require('../common/event');

module.exports = async page => {
    const news = await page.$eval('#links_wrapper', parseNews);
    console.log(4);
    const events = news.map(e => Event('duckduckgo', e.title, e.href));
    return events;

}


const parseNews = element => {
    console.log(element)
    const articles = element.querySelectorAll('.result');
    return Array.from(articles).map(e => {
        const a = e.querySelector('a');
        return {
            title: a.text,
            href: a.href
        };
    });
};
