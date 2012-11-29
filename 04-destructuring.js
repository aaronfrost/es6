Swapping values

Say you have two variables, a and b. Swap them without destructuring:

    var a = 1;
var b = 2;

console.log("a="+a+" b="+b);
var temp;

temp = a;
a = b;
b = temp;

console.log("swapped a="+a+" b="+b);



With destructuring, the temp variable is eliminated and the swap takes place in one line of code:

    ============================
//Destructuring - value swap
var a = 1;
var b = 2;

console.log("pre swap: a ="+a+", b="+b);
[a,b] = [b,a];

console.log("post swap: a ="+a+", b="+b);



//===============================
//Destructuring - returning many values:

var aValue = 1;
var bValue = 2;
var cValue = 3;
var dValue = 4;

console.log("aValue="+aValue+ ", bValue="+bValue+", cValue="+cValue+ ", dValue="+dValue);

[aValue,bValue,cValue,dValue] = returnMany(aValue,bValue,cValue,dValue);

console.log("aValue="+aValue+ ", bValue="+bValue+", cValue="+cValue+ ", dValue="+dValue);


function returnMany(a, b, c, d){
    return [a+1,b+1,c+1,d+1] ;
}
//============================
//Destructuring - Matching function parameters

var array1 = [121,4];
var result = destructuring (array1,5);

console.log(result);

function destructuring([x,y],z,l,m){
    console.log("l"+l);
    return x+y+z+l;
}
============================
    Destructuring - filtering function parameters

    let result = someElements([2,4,6,8,5]);
console.log("result = "+result);



function someElements([,b,,c])  {
    console.log("b="+b);
    console.log("c="+c);
    return b+c;
}


============================
    Destructuring - filtering object parameters

var myObject = {nombre: "Dude",age:"51",gender:"male",nice:"no"};
var result = digOutData(myObject);

console.log("name:"+result.name +" age: "+result.age);
console.log("nice"+result.nice) ;



function digOutData({age:a ,nombre:name, gender:g}){
    console.log("Name:"+name);   //Name: Dude
    console.log("Age:"+a);             //Age: 51
    console.log("Gender:"+g);       //Gender : undefined
    return {name:name,age:a};
}

