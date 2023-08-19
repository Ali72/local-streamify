const {VERY_LOW_DOWNLOAD_RATE, HIGH_DOWNLOAD_RATE} = require("../helper/constants");

module.exports = {
    hostName:"127.0.0.1",
    port: 8001,
    routes:[
        {
            url:"/music.mp3",
            filePath:"files/file_example_MP3_1MG.mp3",
            downloadThrottle:VERY_LOW_DOWNLOAD_RATE,
        },
        {
            url:"/video.mp4",
            filePath:"files/hls/out.mp4",
            downloadThrottle:HIGH_DOWNLOAD_RATE,
        },
    ],
}
