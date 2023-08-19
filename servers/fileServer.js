const {ThrottleGroup} = require("stream-throttle");
const {fileServerConfig} = require("../configs");
const httpAttach = require("http-attach");
const readStreams = require("../helper/fileReadStreams");
const {getFileStats} = require("../helper/utiles");
const http = require("http");

function startServer() {
    let server = http.createServer()

    let url2routesDict = [];
    fileServerConfig.routes.forEach((item) => {
        url2routesDict[item.url] = item
    })

    httpAttach(server, (req, res) => {
        const item = url2routesDict[String(req.url)]

        if (item) {
            streamFile(item, req, res);
        } else {
            console.log("404 : Not found");
            res.statusCode = 404
            res.end("Not found")
        }
    })

    server.listen(fileServerConfig.port, fileServerConfig.hostName)
    console.log("File Server is running on host:", fileServerConfig.hostName, "- port:", fileServerConfig.port)
}


function streamFile(item, req, res) {

    const speed = new ThrottleGroup({rate: item.downloadThrottle});

    getFileStats(item.filePath, function (err, stats) {

        if (err) {
            console.log(err);
            res.statusCode = 404
            res.end("Not found")
            return
        }

        let stream = readStreams.make(item.filePath);

        stream.pipe(speed.throttle()).pipe(res);

        stream
            .on('open', () => {
                console.log('open', new Date())
            })
            .on('data', (chunk) => {
                console.log(new Date(), chunk.length)
            })
            .on('close', () => {
                console.log('close', new Date())
            });


    });
}


module.exports = {
    startServer
}
