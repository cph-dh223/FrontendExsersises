// 1.1
let names = ["Lars", "Peter", "Jan", "Bo"];

function myFilter(arr, callBack) {
    return arr.filter(a => callBack(a))
}

console.log(myFilter(names, (a) => a.length <= 3))

function myMap(arr, callBack) {
    return arr.map(a => callBack(a))
}

console.log(myMap(names, (a => "<li>" + a + "</li>")))

// 1.2

Array.prototype.myFilter = function (callBack) {return this.filter(a => callBack(a))}
let newFilterdArray = names.myFilter(a => a.length <= 3);
console.log(newFilterdArray)

Array.prototype.myMap = function (callBack) {return this.map(a => callBack(a))}
let newMappedArray = names.myMap(a => "<li>" + a + "</li>");
console.log(newMappedArray)

// 1.3

let eletemts = document.getElementsByTagName("div")

console.log(eletemts);

function onClick() {
    document.getElementById("1").style.background = "#ff0000"
    document.getElementById("2").style.background = "#00ff00"
    document.getElementById("3").style.background = "#0000ff"
}
