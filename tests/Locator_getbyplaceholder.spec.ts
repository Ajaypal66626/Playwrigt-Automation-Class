import { test, expect } from "@playwright/test";

test('get by placeholder', async({page})=>
{
await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register')
await page.getByPlaceholder('First Name').fill("Ajay");
await page.getByPlaceholder('Last Name').fill("Vijay");
await page.getByPlaceholder('E-Mail').fill("ajaypal@gmail.com");
})