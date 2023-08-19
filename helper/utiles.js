const fs = require('fs');

function getRange(req, stats) {
    let chunkSize = 1024 * 1024;
    if (stats.size > chunkSize * 2) {
        chunkSize = Math.ceil(stats.size * 0.25);
    }

    let range = (req.headers.range) ? req.headers.range.replace(/bytes=/, "").split("-") : [];
    range[0] = range[0] ? parseInt(range[0], 10) : 0;
    range[1] = range[1] ? parseInt(range[1], 10) : range[0] + chunkSize;
    range[1] = range[1] ? parseInt(range[1], 10) : range[0];
    if (range[1] > stats.size - 1) {
        range[1] = stats.size - 1;
    }

    range = {start: range[0], end: range[1], length: range[1] - range[0] + 1};

    return range
}

function getFileStat(file, callback) {
    fs.stat(file, function (err, stats) {

        if (err) {
            callback(err);
            return
        }

        callback(null, stats);
    });
}

module.exports = {getRange,getFileStat}
