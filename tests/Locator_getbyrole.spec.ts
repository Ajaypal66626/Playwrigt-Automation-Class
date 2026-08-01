import {test,expect} from "@playwright/test";

test('get by role',async({page})=>
{

   await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
   await page.getByRole('textbox', {name:'First Name'}).fill('Ajay')
   await page.getByRole('radio',{name:'No'}).click();
   await page.getByRole('checkbox').click();

   await page.waitForTimeout(5000);

})