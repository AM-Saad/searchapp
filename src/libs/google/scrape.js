const Event = require('../common/event');

module.exports = async page => {
    try {
        const news = await page.$eval('#center_col', parseNews);
        console.log(2);
        const events = news.map(e => Event('google', e.title, e.href));
        return events;
        
    } catch (error) {
        throw error
    }

}


const parseNews = element => {
    const articles = element.querySelectorAll('.g');
    return Array.from(articles).map(e => {
        const a = e.querySelector('a');
        const span = e.querySelector('.IsZvec');
        return {
            title: a.text,
            href: a.href,
        };
    });
};
