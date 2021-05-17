const Event = require('../common/event');

module.exports = async page => {
    const news = await page.$eval('#center_col', parseNews);
    console.log(2);
    const events = news.map(e => Event('document', e.title, e.href));
    return events;

}


const parseNews = element => {
    const articles = element.querySelectorAll('.g');
    return Array.from(articles).map(e => {
        const a = e.querySelector('a');
        return {
            title: a.text,
            href: a.href
        };
    });
};
