import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as archiver from 'archiver';
import * as bodyParser from 'body-parser';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
app.post('/compress', (req, res) => {
    const conf = req.body;
    res.setHeader('Content-Type', 'application/zip');
    const archive = archiver('zip');

    archive.on('error', (err) => {
        res.status(500).send({error: err.message});
    });

    archive.on('end', () => {
        console.log('Archive wrote %d bytes', archive.pointer());
    });

    res.attachment(`${conf.filename}.zip`);

    archive.pipe(res);
    conf.data.forEach(d => {
       archive.append(d.content, {name: `${d.name}.${conf.filesExtension}`});
    });
    archive.finalize();
});

// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
    maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});
