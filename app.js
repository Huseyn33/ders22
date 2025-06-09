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
// // let reqemf=5
// // let kvadrat= Math.pow(reqemf,2)
// // let kok=Math.sqrt(reqemf)
// // let cem=kvadrat+kok
// // console.log(cem);

// // // task14
// // let num1=6.5
// // let num2=5.9
// // let num3=7.2
// // console.log(Math.floor(num1));
// // console.log(Math.floor(num2));
// // console.log(Math.floor(num3));

// // console.log(Math.max(num1,num2,num3));

// // let meyve=["banan","ananas","ciyelek"]
// // console.log(meyve);
// // meyve.push("Nar")
// // console.log(meyve);
// // // task1
// // let arr=["Tunar","Malik","Atilla","Ali"]
// // arr.unshift("Sona")
// // arr.pop()
// // arr.shift()
// // console.log(arr);
// // // task2
// // let olke=["Turkiye","Azerbaycan","Brazilya","Iran"]
// // console.log("Ikinci olke",olke[1]);
// // console.log("Sonuncu olke",olke[olke.length-1]);
// // olke[0]="Pakistan"
// // task1
// // let reqem=[1,4,6]
// // reqem.forEach(reqemler => {
// //     console.log(reqemler);
    
// // });
// // // task2
// // let ededler=[2,5,9]
// // ededler.forEach(element => {
// //     console.log(element.pow(element,2));
    
// // });
// // let adlar=["tunar","malik","sona"]
// // adlar.forEach(ad => {
// //     console.log(ad.toLocaleUpperCase());
    
// // }); 
// // vurma.forEach(vurmalar => {
// //    console.log(vurmalar*2);
    
// // });
// // let isare=["salam","men","Huseyn"]
// // isare.forEach(nida => {
// //     console.log(nida,!);
    
// // });
// // task1
// let eded=[1,2,3]
// let cem=0;
// cem.forEach(element4 => {
// cem+=element4


    
// });
// console.log(cem);

// // task2
// let sagirdler=["Tunar","Ali","Malik"]
// sagirdler.forEach(element9 => {
// console.log(element9);

// });
// // task3
// let ededler=[1,3,5,4,6]
// ededler.forEach(element2 => {
// if (element2%2!=0) {
//     console.log(element2);
    
// }

    
// });
// // task4
// let arr=["Tunar","Turan","Huseyn"]
// let arr2=arr.map(element => element.length)
// console.log(arr2);
// // task5
// let map1=["ali","malik","sona"]
// let map2=map1.map(element2 => element2.toLocaleUpperCase())
// console.log(map2);
// // task1
// let eded=[-1,3,-6,7,8]
// let musbet=eded.filter(element => element>0)
// console.log(musbet);

// // task2
// let adlar=["Ali","Malik"]
// let aditapma=adlar.includes("armud")
// console.log(aditapma);

// // task3
// let cut=[1,2,9,6]
// let cutededitap=cut.find(element4 => element4%2==0)
// console.log(cutededitap);
// // task4
// let meyve=["alma","armud"]
// let bes=meyve.filter(element2 => element2.length==5)
// // task5
// let basherf=["alma","aylin"]
// // let basherfitap=basherf.find(elment9 => elment9[0]=="
// // task1
// const seherler = ["Bakı", "Gəncə", "Sumqayıt", "Şəki", "Lənkəran", "Xaçmaz"];
// let besherfli=seherler.filter(element => element.length>6)
// // task2
// const ededler = [12, 5, 0, -3, -10, 8];
// let menfinitap=ededler.find(element4 => element4<0)
   
// const mehsullar = [
//     ["Qələm", 2],
//     ["Kitab", 15],
//     ["Planşet", 250],
//     ["Çanta", 55],
//     ["Noutbuk", 1200]
//   ];
// let mehsultap=mehsullar.filter(element1 => element1[1]>100)  
// let arr=[23,4,6]
// let yuxari=arr.sort()

// let azaltan=arr.sort((a,b)=>b-a)


// let arr2=[24,56,87]
// let arr4=arr2.reduce((a,b)=>a+b)



// let meyve=["qarpiz","ananas","banan","yemis"]
// let meyve2=meyve.sort((a,b)=>b.length - a.length)
// console.log(meyve2[0]);






// let reverse=["c","b","a"]
// let tersine=reverse.reverse()







// let sort=["Elnur","Huseyn","Eldeniz"]
// let sort2=sort.sort()
// let sort3=sort2.reverse()

// console.log(sort3);

// let meyveler=['alma', 'armud', 'banan']
// let tersine=meyveler.reverse()

// let toplama=[5, 10, 15]
// let topla=toplama.reduce((a,b)=>a+b)


// let elifba=['Elvin', 'Nigar', 'Aysel']
// let elifbasirasi=elifba.sort()
// console.log(elifbasirasi);

// let tersinecevir=[1, 2, 3, 4]
// let tersinecevirme=tersinecevir.reverse()


// let tekrarlanmis=[4, 2, 4, 1, 2] 
// let tekrarsiz=[...new Set(tekrarlanmis)]
// let tekrarlananeded=tekrarsiz.sort((a,b)=>b-a)
// let tersine="alma"
// let tersinecevir=tersine.split("")
// let tersinecevirmek=tersinecevir.reverse()
// let str=tersinecevirmek.join("")
// console.log(str);
// let bolun=[9,5,21,7,8]
// let bol=bolun.filter(element => element%3!==0)
// console.log(bol);
// let a=["alma","nar","gilas","alça"]
// let b=a.filter(element => element[0]=="a")

// console.log(b.length);
// let a=["alma","nar","gilas","alça"]
// a.forEach((element,index) =>  {
//     console.log(element,index.length%2==0);
    
// });
const numbers = [3, 7, 12, 5];
let yoxla=numbers.every(reqem => reqem>0)
console.log(yoxla);


const ages = [12, 15, 21, 17];
let tap=ages.some(reqem1 => reqem1>18)
console.log(tap);


const words = ["Mən", "JavaScript", "öyrənirəm"];


console.log(words.join(""));




const a = [1, 2, 3];  
const b = [4, 5, 6];
let c=a.concat(b)
console.log(c);



const firstPart = ["Salam", "dünya!"];  
const secondPart = ["Bu", "JavaScript-dir."];
let birlesdir=firstPart.concat(secondPart)
let cumle=birlesdir.join("")
console.log(cumle);
