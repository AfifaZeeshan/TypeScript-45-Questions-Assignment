// Cars: Write a function that store information about a car in an Object.  
// The function should always receive a manufacturer and a model name. 
// it should then accept and arbitrary number of keyword arguments. 
// Call the function with the required information and two other name value pairs, 
// such as a color or an optional feature. Print the Object’s returned to make sure all the information was 
// stored correctly.
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const myCar = createCar("Honda", "Civic", { color: "Black", year: "2024" });
console.log(myCar);
export {};
