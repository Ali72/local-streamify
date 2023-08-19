const HLSServer = require('hls-server')
const {hlsServerConfig} = require("../configs");

const hls = new HLSServer()

function attachServer(server){
    hls.attach(server, {
        path: hlsServerConfig.path,  // Base URI to output HLS streams
        dir: hlsServerConfig.dir  // Directory that input hls are stored
    })
    console.log("HLS Server is running...")
}

module.exports = {hls,attachServer}
