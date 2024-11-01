const {addTwoNums} = require("./sum")


const str1 = "Properly adds two numbers"


// this is called unit tests
test(str1, () => {
    expect(addTwoNums(2, 3)).toBe(5);
})