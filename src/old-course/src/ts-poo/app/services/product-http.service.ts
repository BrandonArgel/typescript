import axios from "axios";

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHTTPService implements ProductService {
  private url = "https://api.escuelajs.co/api/v1/products";

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url).then((rta) => rta);
    return data;
  }
  async update(id: Product["id"], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes).then((rta) => rta);
    return data;
  }
  
  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post<Product>(this.url, dto).then((rta) => rta);
    return data;
  }

  async findOne(id: Product["id"]): Promise<Product | undefined> {
    const { data } = await axios.get<Product>(`${this.url}/${id}`).then((rta) => rta);
    return data;
  }
}