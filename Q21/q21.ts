//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects contain in these items.

interface item {
    name:string
    price:number
}

//two objects
const vegetable: item = {
    name: 'Tomato',
    price: 100
}

const fruit: item = {
    name: 'Strawberry',
    price: 300
}

console.log(`vegetable name: ${vegetable.name}, vegetable price: ${vegetable.price}`);
console.log(`fruit name: ${fruit.name}, fruit price: ${fruit.price}`);
