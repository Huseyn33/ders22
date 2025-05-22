// if (condition) {
//     function addInfo(){
//         let input = document.getElementById("name")
//         document.getElementById("h").innerText = `daxil etdiyiniz deyer ${input.value}`
    
//     }
// } else {
    // task1
// let eded = 7.9;
// let netice = Math.floor(eded);
// console.log(netice);
// // task2
// let yuvarlaq=4.3
// console.log(Math.ceil(yuvarlaq));
// // task3
// let say=5.5
// console.log(Math.round(say));
// // task4
// console.log(Math.max(3, 8, 2, 10, 5));
// // task5
// console.log(Math.min(-3, 0, 4, -9, 2));
// // task6
// console.log(Math.sqrt(64));
// // task7
// console.log(Math.pow(3,3));
// // task8
// console.log(Math.random());
// // task9
// console.log(Math.floor(Math.random()*100));
// // task10
// console.log(Math.abs(-25));
// task11
// console.log(Math.floor(Math.random()*150)+50);
// // task12
// let eded=5.2
// let stringeded=String(eded)
// let bolme=stringeded.split(".")
// console.log(`tam hisse ${bolme[0]}`);
// console.log(`kesr hisse ${bolme[1]}`);

// // task13
// let reqemf=5
// let kvadrat= Math.pow(reqemf,2)
// let kok=Math.sqrt(reqemf)
// let cem=kvadrat+kok
// console.log(cem);

// // task14
// let num1=6.5
// let num2=5.9
// let num3=7.2
// console.log(Math.floor(num1));
// console.log(Math.floor(num2));
// console.log(Math.floor(num3));

// console.log(Math.max(num1,num2,num3));

// let meyve=["banan","ananas","ciyelek"]
// console.log(meyve);
// meyve.push("Nar")
// console.log(meyve);
// // task1
// let arr=["Tunar","Malik","Atilla","Ali"]
// arr.unshift("Sona")
// arr.pop()
// arr.shift()
// console.log(arr);
// // task2
// let olke=["Turkiye","Azerbaycan","Brazilya","Iran"]
// console.log("Ikinci olke",olke[1]);
// console.log("Sonuncu olke",olke[olke.length-1]);
// olke[0]="Pakistan"
// task1
let reqem=[1,4,6]
reqem.forEach(reqemler => {
    console.log(reqemler);
    
});
// task2
let ededler=[2,5,9]
ededler.forEach(element => {
    console.log(element.pow(element,2));
    
});
let adlar=["tunar","malik","sona"]
adlar.forEach(ad => {
    console.log(ad.toLocaleUpperCase());
    
});
let vurma=[2,4,6]
vurma.forEach(vurmalar => {
   console.log(vurmalar*2);
    
});
let isare=["salam","men","Huseyn"]
isare.forEach(nida => {
    console.log(nida,!);
    
});