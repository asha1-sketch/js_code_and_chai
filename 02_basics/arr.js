/*const myarr=[1,2,3,4,56,4]
myarr.push(100)
console.log(myarr);
myarr.pop()
console.log(myarr);
myarr.reverse()
console.log(myarr);
console.log(myarr.slice(0,3));
myarr.unshift(123456)
console.log(myarr);
myarr.shift()
console.log(myarr);
const newarr =myarr.join("#")
console.log(newarr);
const my=myarr.slice(0,3)
console.log(my);
console.log(myarr.slice(0,3));//retruns a copy
console.log(myarr);
const c=myarr.splice(0,3)//permnentely deletes from original array
console.log(c);
console.log(myarr);
const a=["asha","prem"]
const s=["sharma"]
console.log(a.concat(s));
const neew=[...a,...s]
console.log(neew);
console.log(Array.isArray("asha"));
console.log(Array.from("asha"));
const aa=10
const bb=20
const cc=30
console.log(Array.of(aa,bb,cc));
const sy=Symbol("okok")
//object literals
const person={
    name:"asha",
    age:20,
    city:"Panipat",
    email:"asha@gmail.com",
    [sy]:"asasas"
}
console.log(person.name);
console.log(person["name"]);//agar square bracket se access karna hai to key ko string leke chalna padega
console.log(person[sy]);
person.greeting=function(){
    console.log("hi user");
};
person.greeting()
person.greet=function(){
    console.log(`hi ${this.name}`);
}
person.greet()
*/
/*
const facebook=new Object()
facebook.id=1234
facebook.user_name="ashasharma"
facebook.isLoggedin=false
console.log(facebook);
const regular_user={
    name:"ashahah",
    fullname:{
        full:"sharma",
        last:"sandal"
    }
}
console.log(regular_user.fullname.full);
const obj1={
    1:"as",
    2:"45"
}
const obj2={
    ok:"okokk"
}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
const arr=[
    {
        1:"a",
        sa:54
    },
    {
        2:"b"

    },
    {
        3:"c"
    }
]
obj3.greet=function(){
    console.log("hi");
}
console.log(arr[0].sa);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty("greet"));
console.log(obj3);
const course={
    name:'asha',
    subject:"iwt",
    teacher_name:"ms aarti"
}
console.log(course.teacher_name);
const {teacher_name: teacher}=course
console.log(teacher);
function doller(valuee){
    return "$"+valuee
}
console.log(typeof doller(100));
function add(num1,num2){
    return num1+num2
}
console.log(add(4,5))
function logg(user){
    if(user===undefined){
        console.log("kya kar raha hai bhai");
        return
    }
    return `${user.name} has logged in`
}
console.log(logg());
function carrt(...num){
    return num
}
console.log(1,2,3,45,6);
function get(arr){
    return arr[1]
}
console.log(get([1,223,3,4,5,6,7,]));
*/

{ // this is a block.
  let a =10
  const b=20
  var c=30
}
//console.log(a);
//console.log(b);
//console.log(c);
/*function one(){
    const a=10
    function two(){
        var b=20
        console.log(a);
    }
    two()
 console.log(b);
}
one()
*/
// let user={
// username:"asha",
// age: 20,
// welcome:function(){
// console.log(`welcome, ${this.username}.`);
// console.log(this);
//  }
// }
// user.welcome()
// user.username="prem"
// user.age=17
// user.welcome()

// console.log(this);
// function one(){
//     console.log(this);
// }
// one()
// const add=(num1,num2)=>{
//     return num1+num2
// }
// const add=(num1,num2)=> num1 + num2;
// const add=(num1,num2)=>(num1+num2)
// console.log(add(2,3));
// (function(){
//     console.log(`hi`);
// })()
// (
//     ()=>{
//         console.log(`hi`);
//     }
// )()
// (function aur(){
//     console.log('hi');
// })();
// (
//     (name)=>{
//         console.log(`hi,${name}`);
//     }
// )("asha");
// console.log(this);
// if(true){
//     console.log("ok");
// }
// if (false){
// // doesnot matter
// }
// console.log(2==="2");//false
// if(true) console.log("ok");
// const balance=700
// if(balance>1000){
//     console.log("less than 1000");
// }else if(balance>900){
//     console.log("less than 900");
// }else if(balance>800){
//     console.log("less than 800");
// }
// else if(balance>700){
// console.log("less than 700");
// }
// else{
//     console.log("ye tumhari father ki daily salary hai");
// }

// if(5){
//     console.log("yes");
// }else {
//     console.log("no");
// }
for(let ii=0;ii<10;ii++){
    const x=ii
    console.log(x);
    if(ii==7){
        console.log(ii,"is good number"
        );
    }
    // console.log(i);
}
// if we want to select a particular word everwhere in a block
//  do ctrl+d multiple times
// for(let i=0;i<10;i++){
//     console.log("*".repeat(3));
    
// }
// for(let i=1;i<=10;i++){
//     if(i==7){
//         console.log("7 aagya");
//         continue;
//     }
//     console.log("2*"+`${i}`+"="+2*i);
// }
// let i=0
// while(i<10){
// console.log("Asha sharma");
// if(i==7){
//     console.log("7 aagya oeee");
//     i++
//     continue
// }
// i++
// }
// let s=1
// do{
//     console.log(`score is ${s}`);
//     s++
// }while(s<10)
// const arr=["Asha","Prem","kushal","Purvi"]
// for (let i of arr){
//     console.log(i);
// }
// const a="asha"
// for(let i of a){
//     console.log(i);
// }
// let tt="asha sharma"
// let t=tt.split("").map(name=>name.toUpperCase())
// console.log(t);
const map=new Map() 
map.set(7,"birthdate")
map.set("in","india")
map.set("us","united states of america")
console.log(map);
// // for(const i of map){
// //     console.log(i);
// // }
// console.log(map.size);
// console.log(map.get(7));
// console.log(map.has("in"));
// map.delete("us")
// console.log(map.has("us"));
// const obj={
//     "name":"asha"
// }
// console.log(obj.name);
const arr=["Asha","Prem","kushal","Purvi"]
arr.forEach((x)=>{
    x=x.toUpperCase()    
    console.log(x);
 })
//  forEach is kind of loop
const t={
    name:"asha"
}
const{name: ok}=t
console.log();