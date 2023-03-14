import { faker } from '@faker-js/faker';

import { addProduct, products, updateProduct, findProducts } from './products/products.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);
const product1 = products[0];
updateProduct(product1.id,
  { title: 'New title' }
);

findProducts({ stock: 10, color: 'red', tags: ['a', 'b'] });