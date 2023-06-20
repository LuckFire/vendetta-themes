import express from 'express';
import { readdirSync, readFileSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});

readdirSync('./src/themes').forEach((theme) => {
    app.get(`/themes/${theme}`, (req, res) => {
        res.send(JSON.parse(readFileSync(`./src/themes/${theme}`)));
    });

    console.log(`http://${process.env.IP}:${port}/themes/${theme}`);
});