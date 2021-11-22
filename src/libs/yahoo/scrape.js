const Event = require('../common/event');

module.exports = async page => {
    try {
        const news = await page.$eval('#main', parseNews);
        console.log(5);
        const events = news.map(e => Event('yahoo', e.title, e.href, e.description));
        return events;
        
    } catch (error) {
        throw error
    }

}


const parseNews = element => {
    const articles = element.querySelectorAll('.relsrch');
    return Array.from(articles).map(e => {
        const a = e.querySelector('a');
        const p = e.querySelector('.compText');
        return {
            title: a.text,
            href: a.href,
            description:p.innerText 
        };
    });
};
