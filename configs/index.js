const fileServerConfig = require("./fileServerConfig");
const hlsServerConfig = require("./hlsServerConfig");
const httpServerConfig = require("./httpSeverConfig");

module.exports = {
    requireHLSServer:true,
    requireFileServer:true,
    httpServerConfig:httpServerConfig,
    hlsServerConfig:hlsServerConfig,
    fileServerConfig:fileServerConfig
}
