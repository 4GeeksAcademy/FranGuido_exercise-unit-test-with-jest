// importing 'sum' function from the app.js file
const { sum } = require('./app.js');

// start first test
test('adds 14 + 9 to equal 23', () =>{
    //calling sum function with two numbers inside the test
    let total = sum(14, 9);

    // expecting the sum of those numbers to be 23
    expect(total).toBe(23);
});

// testing currency conversion