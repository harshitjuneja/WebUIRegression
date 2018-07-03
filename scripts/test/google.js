// Make a script to navigate and take a snapshot and the rest is taken care of <3
const scriptConfig = require('../../configs/google.json');
module.exports = {

    runScript: function (puppeteer) {
        var a = (async () => {
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            await page.goto(scriptConfig.url);
            return page;
        })();
        return a;
    }
};
