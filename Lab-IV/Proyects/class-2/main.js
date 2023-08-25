let array = [1,2,3];//Crea array
console.log(array[2]);

array.push(7);//Agrega al final
console.log(array[3]);

array.unshift(20);//Agrega al principio
console.log(array[0]);

array2 = [...array,1000];//Spread operatorcopia el array
console.log(array2[0],array2[5]);

const evenNumbers = array.filter(num => num % 2 === 0);//Filtra numeros pares
console.log(evenNumbers);

array.forEach((num,index,arr) => {//Suma uno a cada elemento
    arr[index] = num + 1;
    console.log(arr[index])
})

const [primero,,tercero] = evenNumbers;//Extrae valores y les asgina nombres
console.log(primero,tercero);