const userEmail="sam@hy.ai"
if (userEmail) {
    // console.log("got user email");
    
}else{
    // console.log("don't hav user email");
    
}


const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    // console.log("object is empty");
    
    
}


// nullish coalescing operator(??):null undefined


let val1;
// val1=5 ?? 10
// val1=null?? 10
// val1=undefined?? 15
val1=null??10??10
console.log(val1);


// ternary operator




// condition?true:false

const icePrice=100
icePrice<=80?console.log("less than 80"):console.log("more than 80");


