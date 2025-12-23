// TS utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html
import { Product } from "./product.model";

// Omit creates a new type by removing properties from a type or interface
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Partial creates a new type by making all properties of a type or interface optional
export interface UpdateProductDto extends Partial<CreateProductDto> { };

// Pick creates a new type by picking some properties from a type or interface
type example = Pick<Product, 'color' | 'description'>

// Required creates a new type by making all properties of a type or interface required
type example2 = Required<example>

export interface findProductsDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
};

type example3 = Readonly<Product>
