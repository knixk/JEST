const {addTwoNums} = require("./sum")


const str1 = "Properly adds two numbers"


test(str1, () => {
    expect(addTwoNums(2, 3)).toBe(5);
})