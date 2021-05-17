const googleSearch = require('../google');
const youtubeSearch = require('../youtube');

const search = async (query, type) => {
    switch(type){
        case "document":
        return await googleSearch(query);
        case "video":
        return await youtubeSearch(query);
        default:
        const videoEvent = await youtubeSearch(query);
        const docEvent = await googleSearch(query);
        return videoEvent.concat(docEvent)
    }
};

module.exports = search;