function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    let result = str.split(' ').join('').toUpperCase();
    return result;
}

const output = onlyCharacter("  h e llo wor   ld");
console.log(output);

