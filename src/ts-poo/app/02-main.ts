import { ProductMemoryService } from "./services/product-memory.service";

const productServices = new ProductMemoryService();

productServices.create({
  title: "Producto 1",
  price: 100,
  description: "Descripción del producto 1",
  images: [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300"
  ],
  categoryId: 1,
  creationAt: new Date(),
  updatedAt: new Date()
});
const products = productServices.getAll();
const productId = products[0].id;

productServices.update(productId, {
  title: "Producto 1 actualizado",
  price: 100,
});

const rta = productServices.findOne(productId);

console.log(rta);