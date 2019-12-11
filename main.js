const back = require('androidjs').back;
const ytdl = require('ytdl-core');
const fs = require('fs');
const URL = require('url');
const http = require('http');

const baseurl = 'https://www.youtube.com/watch?v='

http.createServer((req, res) => {
    var adr = req.url;
    var q = URL.parse(adr, true);
    var videourl = baseurl + q.pathname.substring(1);
    console.log(videourl);
    res.writeHead(200, { 'Content-Type': 'audio/mp3' });
    const readable = ytdl(videourl, { filter: 'audioonly' });
    readable.pipe(res);
    readable.on('finish', () => {
        res.end();
    });

}).listen(1337);