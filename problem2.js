function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'Invalid';
    }
    str = str.replace(/ /g, '');
    str = str.toUpperCase();
    return str;
}

const output = onlyCharacter("  h e llo wor   ld" );
console.log(output);


