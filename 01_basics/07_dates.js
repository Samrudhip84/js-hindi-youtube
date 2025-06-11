//date//

let myDate=new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// // console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());


// let myCreatedDate= new Date(2025,5,11,8,7)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("2025-06-11")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));  converting into seconds




let newDate=new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long",
    
})


