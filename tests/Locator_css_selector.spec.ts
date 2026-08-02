import {test,expect} from '@playwright/test'

test('Locator Css selector', async({page})=>
{

    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
    

    await page.locator('#input-firstname').fill('Ajay pal'); //Locator By ID: tagname#id_name or #id_name
    await page.locator('input[name="lastname"]').fill('Pal'); // Locator By Value : tagname[Value="name"] 
    await page.locator('input.btn').click(); // Locator By Class : tagname.class_name or .class_name

});