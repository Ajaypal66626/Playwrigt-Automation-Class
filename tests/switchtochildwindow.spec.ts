import {test} from '@playwright/test'

test('Switch to chind window',async ({page,context})=>
{
  await page.goto("https://orangehrm.com/")
  let parentpage=page;

await page.waitForTimeout(4000)

const [childPage] = await Promise.all([
    context.waitForEvent('page'), // Listens for the new page event
    page.getByRole('link',{name:'Contact Us'}).click(), // Triggers the popup
  ]);

  //await childPage.waitForTimeout(4000)

  await childPage.getByRole('button',{name:'Contact Sales'}).click();
   // await childPage.waitForTimeout(4000)

  await parentpage.locator('#headerLanguageBar').click()
  await parentpage.waitForTimeout(4000)

})