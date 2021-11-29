const googleSearch = require('../google');
const youtubeSearch = require('../youtube');
const bingSearch = require('../bing');
const duckSearch = require('../duckduckgo');
const yahooSearch = require('../yahoo');
const search = async (query, queries) => {
  
    let queriesArray = []
    if (queries.includes('youtube')) {
        queriesArray = [...queriesArray, youtubeSearch(query)]
    }
    if (queries.includes('google')) {
        queriesArray = [...queriesArray, googleSearch(query)]
    }
    if (queries.includes('bing')) {
        queriesArray = [...queriesArray, bingSearch(query)]
    }
    if (queries.includes('duck')) {
        queriesArray = [...queriesArray, duckSearch(quer)]
    }
    if (queries.includes('yahoo')) {
        queriesArray = [...queriesArray, yahooSearch(query)]
    }
    try {

        const result = await Promise.all(queriesArray)
        return result

    } catch (error) {
        throw error
    }


};

module.exports = search;