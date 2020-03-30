let arr = [1,4,6,8];
var somma = 0;
var average = 0;

for(let i=0; i < arr.length; i++){
    somma += arr[i];
}

average = somma / arr.length ;

console.log(average);