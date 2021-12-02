require('dotenv').config();
const express = require('express');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const {json} = require('express');
const expressStaticGzip = require('express-static-gzip');
const {SitemapStream, streamToPromise} = require('sitemap');
const {createGzip} = require('zlib');
const massive = require('massive');
const compression = require('compression');
const charCtrl = require('./character-controller');

let sitemap;
const app = express();
app.use(compression());
const path = require('path');
app.use(express.static(`${__dirname}/../build`));
app.use(
  `/build/client`,
  expressStaticGzip(`/build/client`, {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: 'deflate',
        fileExtension: 'zz',
      },
    ],
    orderPreference: ['br', 'gz'],
  }),
);
app.use(json());

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  app.listen(
    SERVER_PORT,
    console.log('The server is running on port', SERVER_PORT || 3000),
  );
});

app.get('/api/getCharacterInfo', charCtrl.getCharacterInfo);

app.get('/sitemap.xml', function (req, res) {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap);
    return;
  }

  try {
    const smStream = new SitemapStream({
      hostname: 'https://nfc.nicholasmcqueen.com/',
    });
    const pipeline = smStream.pipe(createGzip());

    // pipe your entries or directly write them.
    smStream.write({url: '/', changefreq: 'daily', priority: 1.0});
    smStream.end();

    // cache the response
    streamToPromise(pipeline).then(sm => (sitemap = sm));
    // stream write the response
    pipeline.pipe(res).on('error', e => {
      throw e;
    });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
