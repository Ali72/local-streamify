const hlsServer = require("./servers/hlsServer");
const fileServer = require("./servers/fileServer");
const configs = require("./configs");

if(configs.requireHLSServer){
    hlsServer.startServer()
}
if(configs.requireFileServer){
    fileServer.startServer()
}
