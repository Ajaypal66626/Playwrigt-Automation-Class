import {test, expect} from '@playwright/test';

test('Locate by Xpath', async({page})=>

{

   await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register')

    await page.locator('//input[@name="firstname"]').fill('Raj')

    await page.locator(`//input[@id='input-lastname']`).fill('Kumar')

    await page.locator('//input[@name="password" and @placeholder="Password"]').fill('abc123')


    //radio button xpath - //input[@type="radio" and @name="newsletter" and @value="1"]

    await page.locator('(//input[@type="radio" and @name="newsletter"])[1]').click()

    await page.waitForTimeout(4000)

        await page.locator('//a[text()="About Us"]').click()

      await  page.pause()
      


})