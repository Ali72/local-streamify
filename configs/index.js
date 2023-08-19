const fileServerConfig = require("./fileServerConfig");
const hlsServerConfig = require("./hlsServerConfig");

module.exports = {
    requireHLSServer:true,
    requireFileServer:true,
    hlsServerConfig:hlsServerConfig,
    fileServerConfig:fileServerConfig
}
