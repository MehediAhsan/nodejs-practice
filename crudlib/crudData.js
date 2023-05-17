// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const crud = {};

// base directory of the data folder
crud.basedir = path.join(__dirname, '/../.file/');

// write data to file
crud.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${crud.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to stirng
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the new file!');
                        }
                    });
                } else {
                    callback('Error writing to new file!');
                }
            });
        } else {
            callback('There was an error, file may already exists!');
        }
    });
};


module.exports = crud;