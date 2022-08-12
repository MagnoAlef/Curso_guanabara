let cost = [100,400,50,40,700];
let alguma= cost.filter(function(item){
    return item<200
})
console.log(alguma)
const map = cost.map(function(valor){
    return valor / 5
})
console.log(map)