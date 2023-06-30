import express from 'express';
import { existsSync, readdirSync, readFileSync } from 'fs';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;
const host = `http://${process.env.IP}:${port}`

app.listen(port, () => {
    console.log(`\nListening to port: ${port}`);
});

console.log('Themes');
readdirSync('./src/themes').forEach((theme) => {
    const themeFile = `themes/${theme}`;

    app.get(`/${themeFile}`, (req, res) => {
        res.type(express.static.mime.lookup(themeFile));
        res.send(readFileSync(`./src/${themeFile}`));
    });

    console.log(`${host}/${themeFile}`);
});