import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home.js'

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});