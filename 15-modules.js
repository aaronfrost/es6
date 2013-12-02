//SIMPLE MODULE
module 'math' {
    export function sum(x, y) {
        return x + y;
    }
    export var pi = 3.141593;
}

//LATER in your code
import {sum, pi} from 'math';
console.log("2π = " + sum(pi, pi));










//LOCAL RENAMING
import {sum as sumTwoNums, pi as Pi} from 'math';









//REMOTE MODULES
module JSON from 'http://json.org/modules/json2.js';
module YUI from 'http://developer.yahoo.com/modules/yui3.js';







//DYNAMIC MODULE LOADING
System.load('http://json.org/modules/json2.js',
    function(JSON) {
        alert(JSON.stringify([0, {a: true}]));
    });









//http://wiki.ecmascript.org/doku.php?id=harmony:modules_examples



