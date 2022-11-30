const puppeteer = require('puppeteer');
const fs = require('fs');

const mainPageUrl = 'https://forebears.io/romania/forenames';

async function startCrawling() {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        'ignoreHTTPSErrors': true
    });

    const page = await browser.newPage();

    await page.goto(mainPageUrl);
    await page.$$eval('td > a', links => links.map(element => element.innerHTML));
    const x = 2;
}

startCrawling();