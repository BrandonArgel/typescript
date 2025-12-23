import axios from "axios"

import { Product } from "./models/product.model"

(async () => {
  async function getProductsAsync(): Promise<Product[]> {
    const rta = await axios.get("https://api.escuelajs.co/api/v1/products")
    return rta.data
  }

  const products = await getProductsAsync();
  // console.log(products.filter(Boolean));
  console.log(products.map((product: Product) => product.title));
})()