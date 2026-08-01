import { test, expect } from '@playwright/test';

test('gey by locator', async({page})=>
{
  
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
await page.getByText('Register Account').isVisible()

await page.getByText('If you already have an account with us, please login at the ').isVisible()



})