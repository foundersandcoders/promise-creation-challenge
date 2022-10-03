const fs = require("node:fs");

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, contents) => {
      if (error) {
        reject(error);
      } else {
        resolve(contents);
      }
    });
  });
}

module.exports = { readFilePromise };
