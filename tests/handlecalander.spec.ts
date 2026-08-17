import {test} from '@playwright/test'
import { Locator } from '@playwright/test'


test('Handle Calander',async({page})=>{

 page.goto('http://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html')

 await page.locator('#datepicker').click()

 let currentMonth=await page.locator('.ui-datepicker-month').textContent()
 let currentYear=await page.locator('.ui-datepicker-year').textContent()

 let currentmonthyear= `${currentMonth} ${currentYear}` 
 console.log(currentmonthyear)

 let expextedmonthyear='December 2026'
 console.log(expextedmonthyear)

while(true)

    if(currentmonthyear===expextedmonthyear)
    {
    
       let target = await page.getByRole('link', { name: '24', exact: true }).click()
       console.log(target)
         
    }
    else
    {
      await page.locator('.ui-datepicker-next ui-corner-all').click()

      let currentMonth=await page.locator('.ui-datepicker-month').textContent()
      let currentYear=await page.locator('.ui-datepicker-year').textContent()
      let currentmonthyear= `${currentMonth} ${currentYear}` 
    
    }
    
})