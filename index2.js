const fs = require('fs-extra');


async function createPubs () {
    try {
        const exists = await fs.pathExists('./temp2');
        if (exists) { await fs.remove('/temp2') };
        await fs.ensureDir('./temp2')
        await fs.outputJson('./temp2/pubs.json' , 
        [
            {
                "name": "Arawak",
                "owner": {
                    "firstName": "Nicolas",
                    "lastName": "Hodicq",
                    "mail": "nhodicq@bewizyu.com"
                },
            }
        ])
        await fs.watchFile('./temp2/pubs.json' , (curr, prev) => {
            console.log('pubs.json file modified');
            console.log(`pubs.json modified on: ${curr.mtime}`);
            console.log(`pubs.json was previously modified on: ${prev.mtime}`);
            console.log(' ');
        })
    }
    catch(error) {
        failureCallback(error);
    }
}

createPubs();
