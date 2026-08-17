import {test,expect,FrameLocator} from '@playwright/test'

test('Locator Css selector', async({page})=>
{
    await page.goto('https://selectorshub.com/iframe-scenario/')

   let frame1:FrameLocator= page.frameLocator('iframe#pact1').first()
   await frame1.locator('input#inp_val').first().fill('abc')

   await page.waitForTimeout(4000)

   let frame2:FrameLocator=frame1.frameLocator('#pact2').first()
   await frame2.locator('#jex').first().fill('Testing')
   await page.waitForTimeout(4000)

 let frame3:FrameLocator=frame2.frameLocator('#pact3').first()
   await frame3.locator('#glaf').first().fill('AAAAAAA')
   await page.waitForTimeout(4000)

});