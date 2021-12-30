// Задание №1

console.log("Чётные числа от 0 до 100");
for (let a = 2; a <= 100; a++){
    if (a % 2 == 0) {
        console.log(a);
    }
}

//  Задание №2

console.log("Целые числа делящиеся на 3 и 5");
for (let a = 3; a <= 50; a++) {
    if(a % 3 == 0){
        console.log(a + " Делится на 3");
    }
    if(a % 5 == 0){
        console.log(a + "Делится на 5");
    }
}
//  Задание №3
 do{
     var y = +prompt("Введите число строго больше 100, цифра 100 тоже не включается!");
 }while(y < 100);
 

// Задание №4

console.log(" Умножение на  56");
let a = 56;
for (let x = 1; x < 11; x++) {
    let equal = (a * x);
    console.log(equal);
}