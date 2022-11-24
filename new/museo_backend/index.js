const http = require('http');
//
const routes = require('./routes/routes');
const router = require('./routes/router');
const {prepareFile, MIME_TYPES} = require('./utils/fileManager.js')
//
const PORT = 3000;

const server = http.createServer(async (req, res) => {
    if(req.url.split('/')[1] === 'api'){
        res.setHeader('Content-Type', 'application/json');
        await router(req, res, routes);
    }
    else{
        const file = await prepareFile(req.url);     
        const statusCode = file.found ? 200 : 404;
        const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
        res.writeHead(statusCode, { 'Content-Type': mimeType });
        file.stream.pipe(res); 
    }

    console.log(`${req.method} ${req.url} `);

}).listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`);
});

