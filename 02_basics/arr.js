const myarr=[1,2,3,4,56,4]
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