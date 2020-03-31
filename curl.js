const fetch = require('node-fetch');
const fs = require('fs');

const yargs = require('yargs');

const argv = yargs
    .options('curl', {
        alias: 'c',
        describe: 'copies the curl into a file',
        type: "string",
        demandOption: true
    })
    .help()
    .alias('help', 'h')
    .argv

fetch(argv.curl)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        console.log(data);
        return fs.writeFile('output.txt', data, (err) => {
            return;
        })
    })
    .catch(err => {
        console.error('Request failed', err.message);

    });
// Each error is an object based upon the Error object, and has a name and a message.

// console.log(argv);
// console.log(argv.curl);
// console.log(argv.c);



