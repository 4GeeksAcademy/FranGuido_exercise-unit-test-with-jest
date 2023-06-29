// this is a function that sums two numbers
const sum = (a, b) =>{
    return a + b
}

// console log to see the result
console.log(sum(7,3))

// currency conversion funciton

// dollar to yen
let fromDollarToYen = (USD) =>{
    let valueYen = USD * 144.35
    return valueYen
     
}

console.log(fromDollarToYen(10)) // equivalent to 1443.5 Yen


// euro to dollar
let fromEuroToDollar = (Euro) =>{
    let valueDollar = Euro * 1.2
    return valueDollar
}

console.log(fromEuroToDollar(10)) // equivalent to 12 dolars



// yen to pound

let fromYenToPound = (Yen) =>{ 
    let valuePound = Yen * 0.005
    return valuePound
}

console.log(fromYenToPound(10)) // equivalent to 0.5 sterling pounds

// Exporting functions (will be used in another file)
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};


