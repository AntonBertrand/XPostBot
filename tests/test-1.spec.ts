import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://x.com/');
  await page.goto('https://twitter.com/x/migrate?tok=7b2265223a222f222c2274223a313731393836343432337d134d79d18c5f547a4446ebc901d59ec8');
  await page.goto('https://x.com/?mx=2');
  await page.goto('https://x.com/');
  await page.getByTestId('loginButton').click();
  await page.getByLabel('Phone, email address, or').click();
  await page.getByLabel('Phone, email address, or').fill('AlessaRubii');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password', { exact: true }).fill('Milkshake69!');
  await page.getByLabel('Password', { exact: true }).press('Enter');
  await page.getByLabel('Password', { exact: true }).fill('BabyMilk123!');
  await page.getByLabel('Password', { exact: true }).press('Enter');
  await page.getByLabel('Reveal password').click();
  await page.getByLabel('Password', { exact: true }).fill('Milkshake69!');
  await page.getByLabel('Password', { exact: true }).press('Enter');
  await page.getByLabel('Password', { exact: true }).fill('BabyMilk123!');
  await page.getByLabel('Password', { exact: true }).press('Enter');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('BabyPoo123');
  await page.getByTestId('LoginForm_Login_Button').click();
  await page.getByLabel('Password', { exact: true }).fill('BabyPoo123');
  await page.getByLabel('Reveal password').click();
  await page.getByLabel('Password', { exact: true }).fill('BabyPoo123!');
  await page.getByTestId('LoginForm_Login_Button').click();
  await page.getByTestId('sheetDialog').getByRole('button', { name: 'OK' }).click();
  await page.goto('https://x.com/compose/post');
  await page.getByRole('button', { name: 'Add photos or video' }).click();
  await page.getByRole('button', { name: 'Add photos or video' }).setInputFiles('_a793ca2d-597c-4f3b-a163-821b9d8e9322.jpg');
  await page.getByLabel('Add media').click();
  await page.getByLabel('Add media').setInputFiles('_c9d8c597-417d-45d1-a2ba-78f1e5f691e5.jpg');
  await page.getByRole('textbox', { name: 'Post text' }).locator('div').nth(2).click();
  await page.getByRole('textbox', { name: 'Post text' }).fill('Check out the SnuggClub!');
  await page.getByTestId('tweetButton').click();


  
  await page.goto('https://x.com/compose/post');
  await page.getByRole('button', { name: 'Add photos or video' }).click();
  await page.getByRole('button', { name: 'Add photos or video' }).setInputFiles('1.png');
  await page.getByRole('textbox', { name: 'Post text' }).locator('div').nth(2).click();
  await page.getByRole('textbox', { name: 'Post text' }).fill('This is a test post!');
  await page.getByTestId('tweetButton').click();
  
  await page.getByLabel('Alessa@AlessaRubii·1s').getByTestId('caret').click();
  await page.getByTestId('highlighOnPin').locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Pin' }).click();
});