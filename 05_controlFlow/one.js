
// const isUserLoggedIn=true
// const temp=41
// if (temp<40) {
//     console.log("less than 50");
// }else{
//     console.log("temp is more than 40");
// }


// const score=200
// if (score>100) {
//     let power="fly"
//     console.log(`user power ${power}`);
    
// }
// console.log(`user power ${power}`);


// const balance=1000
// if (balance>500) console.log("test");

// if (balance<500) {
//     console.log("less than ");    
// }else if (balance<750) {
//     console.log("less than 750");
// }else if (balance<900) {
//     console.log("less than 900"); 
// }else{
//     console.log("less than 1200");
    
// }


const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (UserLoggedIn&&debitCard) {
    console.log("allow to buy course");   
}
if (loggedInFromGoogle||loggedInFromEmail) {
    console.log("user logged in");
}



