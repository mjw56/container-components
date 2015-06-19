var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var exec = require('child_process').exec;

// TODO: Use socket.io

const api = express()
  .get('/torrent-stream/:magnet?', function(req, res) {

    var cmd = exec('peerflix "' + req.query.magnet + '" --vlc', function (error, stdout, stderr) {
        console.log('kk', stdout);
    });

    res.send({ data: 'torrent data' })
  });

const app = express()
  .all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  });

app.use('/api', api)
  .listen(3001)

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
