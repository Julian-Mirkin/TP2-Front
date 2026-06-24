import {test, expect} from 'vitest'
import {getProducts} from '../../src/Scripts/api.js'

test('getProducts returns products with no filters', async () => {
    const {data, error} = await getProducts();

    expect(error).toBeNull();
    data.forEach(product => {
        expect(product).toHaveProperty('id')
        expect(product).toHaveProperty('nombre')
        expect(product).toHaveProperty('descripcion')
    });
    expect(Array.isArray(data)).toBe(true);
})

test('getProducts returns products filtered by category', async () => {
    const category = 'hombre';
    const {data, error} = await getProducts(category);

    expect(error).toBeNull();
    data.forEach(product => {
        expect(product).toHaveProperty('type', category)
        expect(product).not.toHaveProperty('type', 'mujer')
    })
    
    expect(Array.isArray(data)).toBe(true);
    
})