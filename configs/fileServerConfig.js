
const highRate = 1024 * 1024;
const midRate = 1024 * 512
const lowRate = 100000;
const soLowRate = 10000;

module.exports = {
    hostName:"127.0.0.1",
    port: 8001,
    routes:[
        {
            url:"/music.mp3",
            filePath:"files/file_example_MP3_1MG.mp3",
            downloadThrottle:soLowRate,
        },
        {
            url:"/video.mp4",
            filePath:"files/hls/out.mp4",
            downloadThrottle:highRate,
        },
    ],
}
