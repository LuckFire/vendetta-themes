import express from 'express';
import { readdirSync, readFileSync } from 'fs';

const app = express();
const port = 3000

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});

readdirSync('./src/themes').forEach((theme) => {
    app.get(`/themes/${theme}`, (req, res) => {
        res.send(JSON.parse(readFileSync(`./src/themes/${theme}`)));
    });

    console.log(`http://192.168.1.3:${port}/themes/${theme}`);
});