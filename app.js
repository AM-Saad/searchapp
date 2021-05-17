const search = require('./src/libs/search');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.render('index', {
        events: {}
    })
})

app.post('/search', async (req, res, next) => {
    const q = req.body.searchQuery
    const video = req.body.video
    const document = req.body.document
    try {
        let events
        if (!video && document) {
            events = await search(q, 'document');
        } else if (video && !document) {
            events = await search(q, 'video');
        } else {
            events = await search(q, 'all');
        }
        if (!events) {
            console.log(err);
            return res.redirect('/')
        }

        return res.render('result', {
            events: events,
            query:q
        });
    } catch (error) {
        console.log(error)
        return res.redirect('/')
    }



})
// (async () =>{
//     const q = process.argv[2];
//     console.log(q);
//     const events = await search(q, 'all');
//     console.log(events);


// })();

app.listen(process.env.PORT || 3000);

