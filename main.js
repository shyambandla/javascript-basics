
///  Set example /////


// let items=[1,1,2,3,6,3,8,10,28];

// items=new Set(items);
// console.log(items);

/// map example and interval example ////


// let objects=new Map();

// objects.set(Date.now(),'John');

// let counter=0;
// const intervalId=setInterval(()=>{

// objects.set(Date.now(),'John');
// counter++;
// if(counter>10){

//     console.log(objects);

//     clearInterval(intervalId);

// }
// },1000);

 //////// settimeout example ////////

    // console.log(Date.now());

    // setTimeout(()=>{
    //     console.log(Date.now());
        
    // },1000);
 



/// string ops////


 let str='Hello World shyam';

 console.log(str.split(' '));
 console.log(str.split(' ').join('-'));
 console.log(str.replace(' ','-'));
 console.log(str.replaceAll(' ','-'));

    console.log(str.includes('shyam'));

let video="video/mpeg4 mpeg4";

console.log(video.startsWith('video'));

console.log(video.endsWith('mpeg4'));

console.log(video.indexOf('mpeg4'));

console.log(video.lastIndexOf('mpeg4'));







// let numbers = [{name:'shyam',age:70},{name:'ram',age:30},{name:'shyam',age:50}];



// numbers.push({name:'pawan',age:70});

// numbers.splice(1,1);

// console.log(numbers);
//    const val= numbers.sort((a,b)=>{
//         return a.age-b.age;
//     });

//     console.log(val);

// console.log(3==='3');

//   const res=numbers.reduce((acc, curr) => {
    
//     return acc * curr;
//     },1);
//     console.log(res);

// numbers.forEach((number, i) => {

//     console.log(number);

// });



// numbers.map((number,index)=> {

//     console.log(number,index);


// })



// const filtered = numbers.filter(number => {
//     return number > 2;
// });
// console.log(filtered);
// const number=numbers.find((number,index) => {

//     return number === 38;
// })

//console.log(number);

// console.log(numbers.indexOf(4))




// let salary=0;
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     salary=salary+numbers[i];
// }
// console.log(salary);




