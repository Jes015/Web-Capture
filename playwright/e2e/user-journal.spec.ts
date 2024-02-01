import { test } from '@playwright/test'


test.describe('User Journal', () => {
  test('The default components must render', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Done' }).click()
    await page.getByLabel('Customize options').click()
    await page.getByRole('menuitem', { name: 'Recording', exact: true }).click()
    await page.getByRole('button').nth(2).click()
    await page.getByLabel('Customize options').click()
    await page.getByRole('menuitem', { name: 'Watch Recording' }).click()
    await page.getByRole('main').getByRole('button').click()
  })
})
