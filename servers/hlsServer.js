const HLSServer = require('hls-server')
const http = require("http");
const hlsServerConfig = require("../configs/hlsServerConfig");



function startServer(){

    let server = http.createServer()

    const hls = new HLSServer()

    hls.attach(server, {
        path: hlsServerConfig.path,  // Base URI to output HLS streams
        dir: hlsServerConfig.dir  // Directory that input hls are stored
    })

    server.listen(hlsServerConfig.port,hlsServerConfig.hostName)
    console.log("HLS Server is running on host:",hlsServerConfig.hostName,"- port:",hlsServerConfig.port)
}

module.exports = {startServer}
