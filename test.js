// importing functions from the app.js file
const { sum } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromYenToPound } = require('./app.js');

// start first test (EXAMPLE)
/*test('adds 14 + 9 to equal 23', () =>{
    //calling sum function with two numbers inside the test
    let total = sum(14, 9);

    // expecting the sum of those numbers to be 23
    expect(total).toBe(23);
});*/

// testing currency conversion



// dollar to yen test
test('10 dollars equal 1443.5', () =>{
    let currencyDY = fromDollarToYen(10);

    //expecting 1443.5 yen
    expect(currencyDY).toBe(1443.5);
});


// euro to dollar test
test('10 euro equal 12 dollar', () =>{
    let currencyED = fromEuroToDollar(10);

    //expecting 12 dollar
    expect(currencyED).toBe(12);
});

// yen to pound test
test('10 yen equal 0.05 pounds', () =>{
    let currencyYP = fromYenToPound(10);

    //expecting 0.05 pound
    expect(currencyYP).toBe(0.05);
});
