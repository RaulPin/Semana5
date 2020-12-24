const cars = [
    {
        id:1,
        trademark: 'Audi',
        model: 'A3',
        color: 'blue',
        year: 2010,
        price: "$150,000.00",
        photo: new URL('https://images.pexels.com/photos/3323202/pexels-photo-3323202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    },

    {
        id:2,
        trademark: 'Chevrolet',
        model: 'Silverado',
        color: 'Black',
        year: 2015,
        price: "$170,000.00",
    },

    {
        id:3,
        trademark: 'Mazda',
        model: "CX9",
        color: 'Red',
        year: 2019,
        price: "498,000.00",

    },
    {
        id:4,
        trademark: 'Ford',
        model: 'Lobo',
        color: 'Wine',
        year: 2018,
        price: "$300,000.00",

    },
    {
        id:5,
        trademark: 'Jeep',
        model: 'Patriot',
        color: 'Military green',
        year: 2014,
        price: "$220,000.00",
    
    },
];

function printCars () {
const container = document.getElementById("container-cars");
let html ="";
cars.forEach((car) => {
    html += `<tr>
                <td>${car.trademark}</td>
                <td>${car.model}</td>
                <td>${car.color}</td>
                <td>${car.year}</td>
                <td>${car.price}</td>
                <td> 
                    <button onclick = " deleteCars(${car.id})"> Eliminar </button>
                </td>    
            </tr>`

});
container.innerHTML = html;
}
function deleteCars(id) {
    const index = cars.findIndex((car)=> car.id == id);
    cars.splice(index, 1);
    printCars();
    alert(`Estas por eliminar un automovil con el id ${id}`);
}
//Obtener datos del formulario 
// const formData = function() {
//     let trademark = document.getElementById('trademark').value;
//     let model = document.getElementById('model').value;
//     let color = document.getElementById('color').value;
//     let year = document.getElementById('year').value;
//     let price = document.getElementById('price').value;
//     console.log(trademark+" "+model+" "+color+" "+year+" "+ price);
//     cars.push(formData);


function addCar() {
    const trademark = document.getElementById('trademark').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    const newCar = {
        trademark: trademark ,
        model,
        color,
        year,
        price
}
cars.push(newCar);
printCars();
}
printCars();