import { ProductHTTPService } from "./services/product-http.service";

(async () => {
  const productService = new ProductHTTPService();
  console.log("---".repeat(5));
  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map((item) => item.price));
})()

