import { test, expect } from "vitest";
import { getProduct } from "../../src/Scripts/api.js";

test('getIndividualProduct returns a product with the specified id', async () => {
    const productId = 1;
    const { data, error } = await getProduct(productId);

expect(error).toBeNull();
expect(data).toBeDefined();
expect(data.length).toBe(1);
expect(data[0]).toHaveProperty('id', productId);
expect(data[0]).toHaveProperty('nombre');
expect(data[0]).toHaveProperty('descripcion');
expect(data[0]).toHaveProperty('precio');
expect(data[0]).toHaveProperty('type');
})