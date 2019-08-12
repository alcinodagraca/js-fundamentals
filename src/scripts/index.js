const carId = 100;

//carId = 5;

//console.log(carId);

// function sendCars(day, ...carId){
//     carId.forEach( id => console.log(id) );
// }

// sendCars('Monday', 1, 2, 3);

//Destruturar Arrays 
let carIds = [100, 200, 300];

let car1, car2, theRest;

[car1, car2, theRest] = carIds;

console.log(car1, theRest);

//Destruturando Objectos 
//atribuir valares dentro de um objecto à uma variável

let celular = {modelo: 1530, marca: 'Apple'};

let modelo, marca;

({modelo, marca} = celular);

console.log(marca, modelo);

//Controlling Loops
let i = 0;
for(i = 0; i < 5; i++){
    if(i === 3)
    continue;
    console.log(i);
}


//Equality Operators
let id = 123;

//Aqui será 'True' porque ele irá converter os valores para o mesmo tipo
console.log(id == '123');

console.log(id === '123');

//Retornará falso porque de facto não são iguais
console.log(id != '123');

console.log(id !== '123');