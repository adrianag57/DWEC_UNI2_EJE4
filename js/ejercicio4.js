/*
    Ejercicio propuesto en las transparencias sobre el método fill
*/

const size = 50;
const defaultValue = 0;

//FORMA MANUAL
let arrManual=new Array(size);
for (let i=0;i<arrManual.length;i++)
   arrManual[i]=defaultValue;
console.log(arrManual);

//FORMA "PRO"
let arrPro = new Array(size).fill(defaultValue);
console.log(arrPro);// [0, 0, 0, ... ,0, 0]
