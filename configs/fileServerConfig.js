
const highRate = 1024 * 1024;
const midRate = 1024 * 512
const lowRate = 100000;
const soLowRate = 10000;

const default_success_headers = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': 0,
    'Content-Type': 'audio/mpeg',
}

module.exports = {
    routes:[
        {
            url:"/music.mp3",
            filePath:"files/file_example_MP3_1MG.mp3",
            downloadThrottle:soLowRate,
            response: {
                statusCode: 206,
                headers: default_success_headers
            }
        },
    ],
}
