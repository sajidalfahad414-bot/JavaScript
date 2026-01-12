let product = [
    {        name:"pen",
             price:230
    },
    {
             name:"Note",
             price:200
    },
    {
              name:"book",
              price:250
    }
]
const productSort = product.sort((a,b) =>a.price-b.price);
const productSort1 = product.sort((a,b) =>b.price-a.price);
console.log(productSort);
console.log(productSort1);