import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, findProductsDto } from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
  }
  // data.id = 'hksjdhfskdfh'; 
  // data.createdAt = new Date(1998, 1, 1);
  products.push(newProduct);
  return newProduct;
}


export const updateProduct = (id: Product["id"], changes: UpdateProductDto) => {
  const index = products.findIndex(product => product.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };

  return products[index];
}

export const findProducts = (dto: findProductsDto): Product[] => {
  // dto.color = "blue" // readonly
  // dto.tags?.push('new tag'); // readonlyArray
  // dto.tags = [] // readonly
  return products;
}