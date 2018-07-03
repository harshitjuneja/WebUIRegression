// command for reference mode : node main.js ref googleTest 

const puppeteer = require('puppeteer');
var mode = process.argv[2];
var configFileName = process.argv[3];


if (configFileName) {
    console.log(configFileName, '<------configFileName')
    var configFilePath = './configs/' + configFileName;
    console.log(configFilePath, '<------configFileName')
    var configFile = require(configFilePath);
    var script = require(configFile.scriptfile);
}

if (mode === 'ref') {
    /* run script in referece mode  */
    console.log('Running script in reference mode');
    referece(configFileName);
}

else if (mode === 'test') {
    console.log('Running script = ' + script + ' in test mode');
}

else if (mode === 'validate') {
    test(configFileName);
    validate(configFileName);
}

else {
    console.log('Use me in either ref, test or validate mode! figure out :)');
    process.exit(1);
}

function test(configFileName) {
    var googleScript = script.googleScript;
    // take snapshots via capture.js and save in images/test/user-agent/ref folder
}


function referece() {
    var pageInstance = script.runScript(puppeteer);
}


/* var pageInstance = */
//console.dir( pageInstance);
/* (async () => {
    
}); */
// take snapshots via capture.js and save in images/test/user-agent/ref folder

function validate(configFileName) {
    test(configFileName);
}
