import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';

// import App from '../build/App';
import jsx_runtime_1 from "react/jsx-runtime";
import App from "../src/App.tsx";

const PORT = process.env.PORT || 3006;
const app = express();

// ...

let func = (req, ) => {
    ((0, jsx_runtime_1.jsx)(StaticRouter, {location: req.url, children: ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", { children: "asdasd" }, void 0) }, void 0))}, void 0))
}

app.get('/', (req, res) => {

    console.log("asdasdasd")

    // let str = App()

    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    );

    console.log("asdasdasasdasdd")

    const indexFile = path.resolve('./public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            // console.error('Something went wrong:=============', err);
            // console.error('err.message')
            // console.error("====================")
            return res.status(200).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});