const search = require('./src/libs/search');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/search/:query', async (req, res, next) => {
    const q = req.params.query
    const queries = Object.keys(req.query)
    try {
        let events = await search(q, queries)
        return res.status(200).json(events)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Something went worng.' })
    }



})


app.listen(process.env.PORT || 3000);

