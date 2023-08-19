const fs = require('fs');

class FileReadStreams {
    constructor() {
        this._streams = {};
    }

    make(file, options = null) {
        return options ?
            fs.createReadStream(file, options)
            : fs.createReadStream(file);
    }

    get(file) {
        return this._streams[file] || this.set(file);
    }

    set(file) {
        return this._streams[file] = this.make(file);
    }
}

module.exports =  new FileReadStreams()
