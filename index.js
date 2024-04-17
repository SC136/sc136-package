function Shorten(text, length) {

    if (typeof text !== "string") return "";

    if (typeof length !== "number") {
        throw new Error("'length' Should Be A Number!!!");
    }

    if (text.length <= length) return text;

    var shortened = text.substr(0, length).trim() + "...";

    return shortened;
}

function Reverse(argument) {

    const string = argument.toString();

    let newString = "";

    for (let index = string.length-1; index >= 0; index--) {
        newString += string[index];
    }

    return newString;
}

function genRandomHex() {
    
    var random = Math.random();

    var exponent = --random.toExponential().split('-')[1];

    random *= Math.pow(10, exponent);

    var hex = '#' + ( ~~(random * (1 << 24) )).toString(16);

    return hex;
}

module.exports = {
    Shorten: Shorten,
    Reverse: Reverse,
    genRandomHex: genRandomHex
}