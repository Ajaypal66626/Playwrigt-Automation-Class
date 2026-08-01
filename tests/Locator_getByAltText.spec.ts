
import {test,expect} from '@playwright/test'

test('Locator Gey by Alt Text', async ({page})=>
{

    await page.goto('https://tutorialsninja.com/demo/index.php?route=product/category&path=18')

    await page.getByAltText("MacBook",{exact:true}).isVisible(); 
    await page.getByAltText("MacBook").first().isVisible();
    await page.getByAltText("MacBook").nth(0).isVisible();

    await page.getByAltText("HP LP3065").isEnabled();


})