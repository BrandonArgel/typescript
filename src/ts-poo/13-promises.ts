import axios from "axios"

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello world')
      }, time)
    })
    return promise
  }

  function getProducts() {
    return axios.get("https://api.escuelajs.co/api/v1/products")
  }

  console.log("---".repeat(10));
  const result = await delay(3000)
  console.log(result);
  console.log("---".repeat(10));
  const products = await getProducts();
  console.log(products.data);
})()