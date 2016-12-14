//throw 


var num1 = 1;
var num2 = '5';

var check = function(a,b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw {
            name: 'TypeError',
            msg: 'Necesita Ingresar solo Numeros'
        }
    }
    return a + b;
}
var suma = function (a,b){
    try {
        return check(a,b);
    }catch(error){
        console.log(error.name +":"+ error.msg)
    }
    
}
document.write(suma(num1,num2));