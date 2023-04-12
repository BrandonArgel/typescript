import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHTTPService<TypeClass> {

  constructor(
    private url: string,
  ) { }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHTTPService<string>();
// service.getAll();

// const service2 = new BaseHTTPService<Category>();
// service2.getAll();

(async () => {
  const url1 = "https://api.escuelajs.co/api/v1/products";
  const productsService = new BaseHTTPService<Product>(url1);

  const rta = await productsService.getAll();
  console.log(rta);

  const url2 = "https://api.escuelajs.co/api/v1/categories";
  const categoryService = new BaseHTTPService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log(rta2);
  categoryService.update<Category["id"], UpdateProductDto>(1, {
    title: "New title",
  })
})();