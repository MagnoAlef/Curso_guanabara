// let cost = [100,400,300,700];
// let newCost = cost.map(function(costItem){ 
//     return costItem / 10;
// });
// console.log(newCost);
var numeros = [1,2,3,4,5]
var quadrado = numeros.map(function(item){
    return item*item
})
numeros.forEach(function(num){
    console.log(num)
})
console.log(quadrado)