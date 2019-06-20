const fs = require('fs-extra');


fs.pathExists('./temp') 
    .then(exists => { 
        if(exists) {
            return fs.remove('/temp'); 
        }
        return;
    })
    .then (() => fs.ensureDir('./temp'))
    .then (() => fs.outputJson('./temp/pubs.json' , 
        [
            {
                "name": "Arawak",
                "owner": {
                    "firstName": "Nicolas",
                    "lastName": "Hodicq",
                    "mail": "nhodicq@bewizyu.com"
                },
            }
        ]))
    .then(() => {return fs.watchFile('./temp/pubs.json' , (curr, prev) => {
        console.log('pubs.json file modified');
        console.log(`the current mtime is: ${curr.mtime}`);
        console.log(`the previous mtime was: ${prev.mtime}`);
      })});




