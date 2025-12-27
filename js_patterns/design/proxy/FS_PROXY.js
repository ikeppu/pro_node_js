class FS_PROXY {
  constructor(real_fs) {
    this.fs = real_fs;
  }

  readFile(path, format, callback) {
    if (!path.match(/.txt$|.TXT$/)) {
      return callback(new Error("Only .txt files are allowed"));
    }

    this.fs.readFile(path, format, (error, data) => {
      if (error) {
        return callback(error);
      }

      return callback(null, data);
    });
  }
}

module.exports = FS_PROXY;
