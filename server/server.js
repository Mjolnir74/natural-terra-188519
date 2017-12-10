const DarkSky = require('dark-sky');
const express = require('express');
const path = require('path');

const app = express();
const darkSky = new DarkSky('712b41f65f2cd1198cc026d9aa232914');

const DIST_DIR = path.resolve('.', 'client', 'dist');

process.env.NODE_ENV = app.get('env');

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.get('/api/weather/:latitude/:longitude', (req, res) => {
    let week = [];
    for (let i = 7; i > 0; i--) {
        let date = new Date();
        date.setTime(date.getTime() - (1000 * 60 * 60 * 24 * i));
        
        week.push(
            darkSky
            .latitude(req.params.latitude)
            .longitude(req.params.longitude)
            .time(date.toISOString().split('T')[0])
            .get()
        );
    }
    
    Promise.all(week).then((data) => {
        res.json(data);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

app.use((err, req, res, next) => {
    if (!err) return next();

    console.log(err.stack);

    res.status(500).send('500: Internal Server Error');
});

app.use((req, res) => {
    res.status(404).send('404: Not Found');
});

app.listen(process.env.PORT || 8080);
