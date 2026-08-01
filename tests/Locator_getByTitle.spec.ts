import {test,expect} from '@playwright/test';

test('Locator Get by Tittle', async({page})=>
{
   await page.goto("https://tutorialsninja.com/demo/index.php?route=product/category&path=18");

     await page.getByTitle('HP LP3065').isVisible();
     await page.getByTitle('MacBook Air').isVisible();

})