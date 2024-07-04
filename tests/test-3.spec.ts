import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://x.com/');
  await page.goto('https://twitter.com/x/migrate?tok=7b2265223a222f222c2274223a313731393933363830327df0c0a1a52954d0d6300d58335e9b4f04');
  await page.goto('https://x.com/?mx=2');
  await page.goto('https://x.com/');
  await page.getByTestId('loginButton').click();
  await page.getByTestId('app-bar-close').click();
  await page.getByTestId('loginButton').click();
  await page.getByLabel('Phone, email address, or').click();
  await page.getByLabel('Phone, email address, or').fill('alessa.rubiii');
  await page.getByText('Sign in to XSign in with').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByTestId('app-bar-close').click();
  await page.getByTestId('loginButton').click();
  await page.getByLabel('Phone, email address, or').click();
  await page.getByLabel('Phone, email address, or').fill('AlessaRubii');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('BabyPoo123!');
  await page.getByTestId('LoginForm_Login_Button').click();
  await page.getByRole('button', { name: 'Refuse non-essential cookies' }).click();
  await page.getByTestId('SideNav_NewTweet_Button').click();
  await page.getByTestId('app-bar-back').click();
  await page.locator('.r-1oszu61 > div > div > div > div > div > .css-146c3p1 > .css-175oi2r').first().click();
  await page.getByTestId('tweetButton').click();
  await page.getByTestId('toast').locator('a').click();
  await page.locator('.css-175oi2r > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(2) > .css-175oi2r').first().click();
  await page.getByRole('button', { name: 'Add photos or video' }).click();
  await page.getByRole('button', { name: 'Add photos or video' }).setInputFiles('IMG_1361 Andre.mov');
  await page.getByRole('button', { name: 'Add photos or video' }).click();
  await page.getByRole('button', { name: 'Add photos or video' }).setInputFiles('IMG_1441 Andre (IG).jpeg');
  await page.getByTestId('attachments').locator('img').click();


  await page.getByTestId('primaryColumn').getByLabel('Home timeline').click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Delete' }).locator('div').nth(2).click();
  await page.getByTestId('confirmationSheetConfirm').click();


  await page.getByRole('link', { name: 'Image' }).click();
  await page.getByLabel('Close').click();
  await page.getByTestId('SideNav_NewTweet_Button').click();
  await page.getByTestId('gifSearchButton').click();
  await page.getByTestId('app-bar-close').click();
  await page.getByLabel('Add photos or video').click();
  await page.getByLabel('Add photos or video').setInputFiles('IMG_1429 Andre (IG).jpeg');


  await page.getByLabel('Add media').click();

  await page.getByTestId('attachments').locator('img').click();
});