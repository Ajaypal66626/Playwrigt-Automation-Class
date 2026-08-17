import { test, expect, Page } from '@playwright/test';

/**
 * Reusable helper to select any target date in jQuery UI Datepicker
 */
async function selectCustomDate(
  page: Page,
  targetDay: string,
  targetMonth: string, // e.g., "December"
  targetYear: string   // e.g., "2026"
) {
  // 1. Click input to reveal the calendar widget
  await page.locator('#datepicker').click();

  const monthLabel = page.locator('.ui-datepicker-month');
  const yearLabel = page.locator('.ui-datepicker-year');
  const nextButton = page.locator('.ui-datepicker-next');
  const prevButton = page.locator('.ui-datepicker-prev');

  // 2. Loop until target month and year match
  while (true) {
    const currentMonth = (await monthLabel.textContent())?.trim();
    const currentYear = (await yearLabel.textContent())?.trim();

    if (currentMonth === targetMonth && currentYear === targetYear) {
      break;
    }

    // Navigate forwards if target year/month is in the future
    const currentDate = new Date(`${currentMonth} 1, ${currentYear}`);
    const targetDate = new Date(`${targetMonth} 1, ${targetYear}`);

    if (targetDate > currentDate) {
      await nextButton.click();
    } else {
      await prevButton.click();
    }
  }

  // 3. Click the target day
  await page.locator('.ui-datepicker-calendar td a', { hasText: new RegExp(`^${targetDay}$`) }).click();
}

test('Handle dynamic date selection across different months/years', async ({ page }) => {
  await page.goto('http://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');

  // Select December 15, 2026
  await selectCustomDate(page, '15', 'December', '2026');

  // Validate the input field has updated
  await expect(page.locator('#datepicker')).toHaveValue('12/15/2026');
});