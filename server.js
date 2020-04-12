const express = require('express');
const next = require('next');
const { join } = require('path');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
// When you provide dev is true it will boot up th server in development mode,
// like you're seeing. When it's false it'll boot in production mode
const app = next({ dev });
const handle = app.getRequestHandler();
const DOCS_PATH = '/out/';
const data = require('./data.js');

app.prepare().then(() => {
    const server = express();
    server.use(
        '/_next',
        express.static(join(__dirname, DOCS_PATH, '_next/')),
    );

    server.get('/api/threats', (req, res) => {
        const threatData = data[req.query.type] || {};
        return res.send(threatData);
    });
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    })
});