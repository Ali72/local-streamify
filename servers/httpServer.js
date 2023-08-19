
let http = require('http')
let server = http.createServer()

// server.on("request",(req, res) => {
//
//     const expr = req.url;
//     switch (expr) {
//         case '/music-corrupt.mp3':
//             console.log('request for music 1');
//             // streamFileChunked(notValidFile, req, res);
//             break;
//         case '/music1.mp3':
//             console.log('request for music 1');
//             // streamFileChunked(source1, req, res);
//             // streamFileChunked(notValidFile, req, res);
//             break;
//         case '/music2.mp3':
//             console.log('request for music 2');
//             // streamFileChunked(source2, req, res);
//             break;
//         case '/music3.mp3':
//             console.log('request for music 3');
//             // streamFileChunked(source3, req, res);
//             break;
//         case '/music4.mp3':
//             // streamFileChunked(source4, req, res);
//             break;
//         default:
//             console.error("404 : Not found");
//             res.statusCode = 404
//             res.end("Not found")
//     }
// })

module.exports = {server}
