const fs = require('fs');
const {ThrottleGroup} = require("stream-throttle");
const {fileServerConfig} = require("../configs");
const httpAttach = require("http-attach");
const readStreams = require("../helper/fileReadStreams");
const {getFileStat, getRange} = require("../helper/utiles");

function attachServer(server) {

    let url2routesDict = [];
    fileServerConfig.routes.forEach((item) => {
        url2routesDict[item.url] = item
    })

    httpAttach(server, (req, res) => {
        const item = url2routesDict[String(req.url)]

        if (item) {
            streamFileChunked(item, req, res);
        } else {
            console.log("404 : Not found");
            res.statusCode = 404
            res.end("Not found")
        }
    })
    console.log("File server is running...")
}




function streamFileChunked(item, req, res) {

    const speed = new ThrottleGroup({rate: item.downloadThrottle});

    getFileStat(item.filePath, function (err, stats) {

        if (err) {
            console.log(err);
            res.statusCode = 404
            res.end("Not found")
            return
        }

        const range = getRange(req, stats)
        let stream = readStreams.make(item.filePath, range);

        res.writeHead(item.response.statusCode, {
            'Accept-Ranges': 'bytes',
            'Content-Range': 'bytes ' + range.start + '-' + range.end + '/' + stats.size,
            'Content-Length': range.end - range.start + 1,
            ...item.response.headers,
        });

        stream.pipe(speed.throttle()).pipe(res);

        stream.on('open', () => {
            console.log('open', new Date(), range)
        })
            .on('data', (chunk) => {
                console.log(new Date(), chunk.length, range) // 65536 bytes
            })
            .on('close', () => {
                console.log('close', new Date(), range)
            });


    });
}



module.exports = {
    attachServer
}
