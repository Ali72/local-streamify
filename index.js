const hlsServer = require("./servers/hlsServer");
const httpServer = require("./servers/httpServer");
const fileServer = require("./servers/fileServer");
const configs = require("./configs");

if(configs.requireHLSServer){
    hlsServer.attachServer(httpServer.server)
}
if(configs.requireFileServer){
    fileServer.attachServer(httpServer.server)
}

httpServer.server.listen(configs.httpServerConfig.port, configs.httpServerConfig.ip)

console.log("httpServer is running...")
