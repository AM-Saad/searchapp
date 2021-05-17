const Event = require('../common/event');

module.exports = async page => {
    const news = await page.$eval('#content', parseNews);
    console.log(1);
    const events = news.map(e => Event('video', e.title, e.href, e.img));
    return events;

}


const parseNews = element => {
    const articles = element.querySelectorAll('ytd-video-renderer');
    return Array.from(articles).map(e => {
        // const imgsrc = e.querySelector('#thumbnail')
        const img = e.querySelector('.yt-img-shadow')
        const a = e.querySelector('#video-title');

        return {
            title: a.title,
            href: a.href,
            img: img.src
        };
    });
};
