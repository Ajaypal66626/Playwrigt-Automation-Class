import {test,expect} from "@playwright/test";

test('get by label', async({page})=>

{
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
await page.getByLabel('First Name').fill("Ajay");
await page.getByLabel('Last Name').fill("Pal");
await page.getByLabel('E-Mail').fill("ajaypalsinghgour@gmail.com");
});