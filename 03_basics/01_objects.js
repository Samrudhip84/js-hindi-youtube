const tinderUser=new Object()

tinderUser.id="12hj"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser);


const regularUser={
    email:"sam@google.com",
    fullname:{
        userfullname:{
            firstname:"sam"
        }
    }
}
// console.log(regularUser.fullname);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty(""));


const course ={
    courseName:"Js in hindi",
    price:"999",
    courseInstructor:"samrudhi",
}

const{courseInstructor: instructor}=course
console.log(instructor);


// const navbar=()=>{

// }
// navbar(company="samrudhi" )

// {
//     "name":"samrudhi",
//     "courseName":"Js in hindi",
//     "price":"free",
// }


