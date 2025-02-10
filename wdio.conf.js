exports.config = {
    runner: 'local',
    specs: ['./Testing/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-gpu', '--window-size=1920,1080']
        }
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: [['chromedriver', { logFileName: 'wdio-chromedriver.log' }]],
    
  // ✅ Ensure this is present
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onComplete: function () {
        const { execSync } = require('child_process');
        execSync('allure generate allure-results --clean -o allure-report', { stdio: 'inherit' });
    },
};
