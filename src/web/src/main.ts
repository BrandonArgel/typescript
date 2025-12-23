const h1 = document.querySelector('h1')
console.log(h1?.textContent)

const title: HTMLHeadElement = document.querySelector('.title') as HTMLHeadElement
console.log(title?.textContent)

const message = document.querySelector('#message') as HTMLInputElement
console.log(message.placeholder)
