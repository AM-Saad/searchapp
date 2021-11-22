const Event = require('../common/event');

module.exports = async page => {
    const news = await page.$eval('#b_content', parseNews);
    console.log(3);
    const events = news.map(e => Event('bing', e.title, e.href));
    return events;

}


const parseNews = element => {
    console.log(element)
    const articles = element.querySelectorAll('.b_algo');
    return Array.from(articles).map(e => {
        const a = e.querySelector('a');
        return {
            title: a.text,
            href: a.href
        };
    });
};
