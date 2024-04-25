let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
let shortNames = names.filter(a => a.length <= 3);
shortNames.forEach(a => console.log(a));


function toHTML(names) {
    let html = names.map(a => "<li>" + a + "</li>").reduce((acc, a) => acc + a,"<ul>") + "<ul>";
    return html;
}

console.log(toHTML(names));

let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

console.log(cars.filter(c => c.year > 1999))
console.log(cars.filter(c => c.make == 'Volvo'))
console.log(cars.filter(c => c.price < 5000))

function carsToSQL(cars) {
    let carSQL = cars.map(c => "INSERT INTO cars (id,year,make,model,price) VALUES ( " + c.id + c.year + c.make + c.model + c.price + ");").reduce((acc,c) => acc + c + "\n", "")
    return carSQL
}

console.log(carsToSQL(cars))