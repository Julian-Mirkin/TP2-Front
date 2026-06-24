import { test, expect } from '@playwright/test';

test('login, buy first product, delete order and logout', async ({ page }) => {
  // Login
  await page.goto('http://localhost:5173/login');

  await page.getByLabel('Email').fill(
    process.env.TEST_EMAIL
  );

  await page.getByLabel('Contrasena').fill(
    process.env.TEST_PASSWORD
  );

  await page.getByRole('button', {
    name: 'Ingresar',
  }).click();

  // Wait for redirect to home
  await expect(page).toHaveURL(/home/);

  // Wait for products to load
  await page.waitForLoadState('networkidle');

  // Open first product link
  const firstProduct = await page
  .getByTestId('product-link')
  .first()
  .click();

  // Verify product page
  await expect(
    page.getByRole('button', { name: 'Comprar' })
  ).toBeVisible();

  // Create order
  await page.getByRole('button', {
    name: 'Comprar',
  }).click();

  // Product page redirects to cart after successful order
  await expect(page).toHaveURL(/cart/);

  // Ensure at least one order exists
  await expect(
    page.getByRole('button', { name: 'Eliminar' }).first()
  ).toBeVisible();

  // Delete order
  await page.getByRole('button', {
    name: 'Eliminar',
  }).first().click();

  // Verify cart is empty
  await expect(
    page.getByText('No tienes pedidos.')
  ).toBeVisible();

  // Logout
  await page.getByRole('button', {
    name: 'Salir',
  }).click();

  // Should return to login page
  await expect(page).toHaveURL(/login/);
});