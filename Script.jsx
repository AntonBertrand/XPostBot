const { chromium } = require('playwright');

const userAgentStrings = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
];

const postTextStrings = [
    'This is a test post',
    'This is a post for testing purposes',
]

function logMsg(message) {
    const time = new Date().toLocaleString();
    console.log(`${time}: ${message}`);
}

async function sleep(ms) {
    logMsg(`Waiting ${ms/1000} between cycles`)
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    // Ensure the input is a number
    min = Math.ceil(min);
    max = Math.floor(max);
    // Generate random integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getRandomString(strings) {
    if (!Array.isArray(strings) || strings.length === 0) {
      throw new Error('Input must be a non-empty array of strings');
    }
  
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

async function randomHalt(page, min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    logMsg(`Waiting for ${randomNum} seconds`);
    await page.waitForTimeout(randomNum * 1000);
}

const postBot = async () => {


    const browser = await chromium.launch({ 
        headless: false,
        });

    const context = await browser.newContext({
        storageState: 'LoginAuth.json',
        userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
    });

    const page = await context.newPage();

        // Navigate to Twitter Post Page
        try {
            logMsg(`Navigating to Post Page`);
            await page.goto('https://x.com/compose/post');
        } catch (error) {
            logMsg(`Failed to navigate to Post Page`);
            return;
        }

        await randomHalt(page,5,10);


        // Add Image
        try {
            const inputFile = await page.$('input[type="file"]');
            await inputFile.setInputFiles(`Images/${getRandomInt(1, 3)}.JPG`);
        } catch (error) {
            logMsg(`Failed to Add Image` + " " + error);
            return;
        }

        await randomHalt(page,5,10);


        // Add Text
        try {
            await page.getByRole('textbox', { name: 'Post text' }).locator('div').nth(2).click();
            await page.waitForTimeout(6000);
            await page.getByRole('textbox', { name: 'Post text' }).fill(`${getRandomString(postTextStrings)}`);
        } catch (error) {
            logMsg(`Failed to navigate to Add Image`);
            return;
        }

        await randomHalt(page,5,10);


        // Submit Post
        try {
            await page.getByTestId('tweetButton').click();
        } catch (error) {
            logMsg(`Failed to navigate to Add Image`);
            return;
        }

        await randomHalt(page,5,10);


        logMsg(`Post Succesfully Created!`);

        await context.close();
        await browser.close();

}

const runScript = async () => {

    const firstRun = true;
    const running = true;

    while (running) {

        if (!firstRun) {
            await sleep(60000) // wait between cycles
        }

        firstRun = false;

        logMsg(`Running the Post Bot`);
        await postBot();

    }

}

runScript();
