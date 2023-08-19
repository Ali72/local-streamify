const fs = require('fs');

function getFileStats(file, callback) {
    fs.stat(file, function (err, stats) {

        if (err) {
            callback(err);
            return
        }

        callback(null, stats);
    });
}

module.exports = {getFileStats}
