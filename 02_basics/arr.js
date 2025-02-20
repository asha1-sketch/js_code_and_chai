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