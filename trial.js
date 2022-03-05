const users ={
    name : "Aka",
    age : 20,
    sayHay(){
        console.log("Hello my")
    },
    jokes : "ini adalah Joke bapak2",
}

users.hari = "kamis"

const {hari, ...apanih} = users
console.log(apanih.name)

const arrayList = ["Jakarta", "Bandung", "Surabaya", 4]
const [secondList, ...restList] = arrayList
console.log(restList)

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
let {
size: { // put size here
    width,
    height
},
items: [item1, item2], // assign items here
title = "Menu" // not present in the object (default value is used)
} = options;

let date = Date.now(); // 
console.log( date ); // 1.01.2011, 02:03:04.567

let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

console.log( `The loop took ${end - start} ms` );


let rock = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  console.log(rock); // {name: "John", age: 30}

  let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
//   alert(typeof json); // we've got a string!
  
//   console.log(json);

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log( user ); // 1