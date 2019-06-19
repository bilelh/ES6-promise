const fs = require('fs-extra')

//const maPromise = new Promise()

fs.pathExists('./temp') 
    .then(exists => { 
        if(exists) {
            return fs.remove('./temp'); 
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
                "openDays": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "openHours": {
                    "start": 10,
                    "end": 1
                },
                "beers": [
                    {
                        "type": "Blonde",
                        "name": "Triple Karmeliet"
                    }
                ]
            }
        ]))
