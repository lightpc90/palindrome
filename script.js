console.log("hello! from script.js")

let message = '';
const log = document.getElementById('log')

const input = document.getElementById('text-input');
const button = document.getElementById('check-btn').addEventListener("click", render);
const result = document.getElementById('result')



function render() {
    console.log("text input: ", input.value)
    if (isPal()) {
        console.log("palindrome: " , input.value)
        message = `${input.value} is a palindrome`
    }
    else {
        console.log("not a palindrome: ", input.value)
        message = `${input.value} is not a palindrome`
    }
    input.value = ''
    result.textContent = message
}

// functon to check if it's palindrome
function isPal() {
    // refine the input;
    const alphanum = input.value.replace(/[^a-zA-Z0-9]/g, '')
    // convert to lowercaps
    const strLowercaps = alphanum.toLowerCase()
    const reversedString = reverseString(strLowercaps)
    console.log("reversed string: ", reversedString)
    console.log("lowercaps string: ", strLowercaps)
    if (strLowercaps === reversedString) {
        return true
    }
    return false
}

// function to reverse the string
function reverseString(str) {
    // const reversed = str.split('').reverse().join('')
    console.log("original string: ", str)
    const string = str.split('')
    const len = string.length
    for (i = 0; i < (len / 2); i++) {
        // store the right value
        const rightValue = string[len - i - 1]
        // replace the right value with the left value
        string[len - i - 1] = string[i]
        // replace the left value with the stored right value
        string[i] = rightValue
    }
    console.log("reversed string: ", string)
    return string.join('');
}