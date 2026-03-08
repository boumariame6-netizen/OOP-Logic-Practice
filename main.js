// // class Admin {
// //   #password;
// //   #passRef = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// //   constructor(password) {
// //     this.#password = password;
// //   }
// //    checkPassWord(password){
// //         if (this.#passRef.test(password) === false) {      
// //       console.log("password isn't strong");
// //     }
// //    }

// //   changePassword(oldPass, newPass) {
// //     if (oldPass === this.#password) {
// //           if (this.#passRef.test(newPass) === true) {
// //            this.#password = newPass
// //          }else{
// //              console.log("password isn't strong");
// //          }
// //     } else {
// //       console.log("old passsword not currect");
// //     }
// //   }
 
// // }

// // const user = new Admin("Abcd1234#");

// // user.changePassword("Abcd1234#", "hh"); // password isn't strong
// // user.changePassword("wrongOld", "Xy12#abc"); // old password not correct
// // user.changePassword("Abcd1234#", "Xy12#abc"); 


// // /* Challenge: Convert Constructor Function to Class
// // Instructions:
// // You are given the following Constructor Function:
// // function Car(name, model, price) {
// //   this.n = name;
// //   this.m = model;
// //   this.p = price;
// // }
// // Your Tasks:
// // Convert this Constructor Function into a Class using Class Syntax.
// // Add two methods:
// // A method called run that prints:
// // "Car Is Running Now"
// // A method called stop that prints:
// // "Car Is Stopped"
// // Create three car objects using this class with any data you like.
// // Print the data of the first car in the console in the following format:
// // Car One Name Is MG And Model Is 2022 And Price Is 420000
// // After that, call the run method for the first car. */


// // //    *****    Implementation    *****----------------------------------------------------------------------------*********************
// // class Car {
// //     constructor(name, model, price) {
// //         this.n = name;
// //         this.m = model;
// //         this.p = price;
// //     }
// //      run () {
// //       console.log('Car Is Running Now');
// //     }
// //     stop () {
// //       console.log('Car Is Stopped');
// //     }
  
// // }
// // const carOne = new Car('BMW '," i4 eDrive40",'$57,900');
// // const carTwo = new Car('Ferrari ',"F80:",'$3.0 Million');
// // const carThree = new Car('Ford ',"Explorer ST",' $54,905');

// // console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
// // carOne.run();
// // // // Needed Output
// // // "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// // // "Car Is Running Now"



// // /* Challenge: Create a Tablet Class with Inheritance

// // You are given the following class:

// // class Phone {
// //   constructor(name, serial, price) {
// //     this.name = name;
// //     this.serial = serial;
// //     this.price = price;
// //   }
// // }
// // Your Tasks:
// // Create a new class called Tablet that extends the Phone class.
// // Add an additional property called size.
// // Add a method named fullDetails.
// // The fullDetails method should return a string in the following format:
// // iPad Serial is 100200300 And Size Is 12.9
// // If the size is not provided, the method should display:
// // Size Is Unknown
// // Use the Tablet class to create multiple tablet objects.
// // Call the fullDetails method for each tablet and print the result in the console. */



// // //    *****    Implementation    *****----------------------------------------------------------------------------*********************

// // class Phone {
// //   constructor(name, serial, price) {
// //     this.name = name;
// //     this.serial = serial;
// //     this.price = price;
// //   }
// // }
// // class Tablet extends Phone {
// //   constructor(name,serial,price,size){
// //     super(name,serial,price)
// //     this.size = size
// //   }
// //   fullDetails() {
// //     return `${this.name} Serial is ${this.serial} And Size Is ${this.size ?? 'UnKnown'}`
// //   }
// // }
// // let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// // let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// // let TabletThree = new Tablet("LG", 250450650, 650);

// // console.log(`${TabletOne.fullDetails()}`);
// // // // iPad Serial is 100200300 And Size Is 12.9
// // console.log(`${TabletTwo.fullDetails()}`);
// // // // Nokia Serial is 350450650 And Size Is 10.5
// // console.log(`${TabletThree.fullDetails()}`);
// // // // LG Serial is 250450650 And Size Is Unknown



// // /* 
// // /* Challenge
// // Task:
// //   1- Create a class named "User".
// //   2- The "card" property must be private (prevent direct access).
// //   3- The card input can be a String (with or without dashes) or a Number.
// //   4- Create a getter named "showData" that returns the message:
// //      "Hello [username] Your Credit Card Number Is [Formatted Card]"
// //   5- The card must be formatted as 4 groups of 4 digits separated by dashes (e.g., 1234-5678-1234-5678).
// //   6- Do not modify the instantiation or the console.log lines below.
// // */

// // //    *****    Implementation    *****----------------------------------------------------------------------------*********************

// // class User {
// //   #c
// //   constructor(username, card) {
// //     this.u = username;
// //     this.#c = card;
// //   }
 
    
// //   get showData() {
// //     let regCard =  this.#c.toString().replace(/-/g,"").replace(/(.{4})(?=.)/g, "$1-")
// //     return `Hello ${this.u} Your Credit Card Number Is ${regCard}`
// //   }
// // }

// // let userOne = new User("Osama", "1234-5678-1234-5678");
// // let userTwo = new User("Ahmed", "1234567812345678");
// // let userThree = new User("Ghareeb", 1234567812345678);

// // console.log(userOne.showData);
// // // // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
// // console.log(userTwo.showData);
// // // // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
// // console.log(userThree.showData);
// // // // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
// // console.log(userOne.c); // Prevent Accessing To Card Property Here
// // // // Undefined

// // /* Challenge
// // /*
// //   Task:
// //   1- Extend the built-in "String" object by adding a new method.
// //   2- The method must be named "addLove".
// //   3- The method should return a string in this format: 
// //      "I Love [String Value] Web School"
// //   4- Use the "this" keyword to access the current string value.
// //   5- Do not modify the existing "myStr" or the console.log line.
// // */
// // //    *****    Implementation    *****----------------------------------------------------------------------------*********************

// // String.prototype.addLove = function(){
// //   return `I love ${this} Web School`
// // }

// // // Do Not Edit Below
// // let myStr = "Elzero";
// // console.log(myStr.addLove()); // I Love Elzero Web School







// // //    *****    Implementation    *****----------------------------------------------------------------------------*********************

// // const myObj = {
// //   username: "Elzero",
// //   id: 100,
// //   score: 1000,
// //   country: "Egypt",
// // };

// // // Write Your Code Here
// // Object.defineProperties(myObj , {
// //   'username': {
// //     writable:true,
// //     enumerable:true,
// //     configurable:true
// //   },
// //   'id': {
   
// //     enumerable:false,
    
// //   },
// //   'score': {
// //     writable:false,
// //   },
// //   'country': {
// //     writable:true,
// //     enumerable:false,
// //     configurable:false
// //   },
  
// // })
// // // delete myObj.country

// // // myObj.score = 500;

// // for (let prop in myObj) {
// //   console.log(`${prop} => ${myObj[prop]}`);
// // }

// // console.log(myObj);

// // // Needed Output

// // // "username => Elzero"
// // // "score => 1000"
// // // {username: 'Elzero', score: 1000, id: 100}


// // Date, Generators, Modules *****


// // let date = new Date()
// // let birth =new Date('2005-01-22') 

// // let operation = date - birth 

// // let seconds = operation / 1000
// // let minutes =  seconds / 60
// // let hours = minutes / 60
// // let days = hours / 24
// // let months = days / 30
// // let years = months / 12

// // console.log(`${Math.floor(seconds)} Seconds`)
// // console.log(`${Math.floor(minutes)} Minutes`)
// // console.log(`${Math.floor(hours)} Hours`)
// // console.log(`${Math.floor(days)} Days`)
// // console.log(`${Math.floor(months)} Months`)
// // console.log(`${Math.floor(years)} Years`)

// // setInterval(()=>{
// //   let date = new Date()
// //   let birth = new Date('2005-01-22')
// //   let operation = date - birth
// //   let seconds = Math.floor(operation / 1000)

// //   console.clear()

// //   console.log(`${seconds} Seconds passed since you were born!`)
// // },1000)


// // let date = new Date(); 

// // let lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);

// // const months = ["January", "February", "March", "April", "May", "June", 
// //                 "July", "August", "September", "October", "November", "December"];
// // console.log(lastDayPrevMonth);
// // let monthName = months[lastDayPrevMonth.getMonth()];
// // let lastDay = lastDayPrevMonth.getDate();

// // console.log(`Previous Month Is ${monthName} And Last Day Is ${lastDay}`);

// // let now = new Date()
// // let birth = new Date('2005-01-22')
// // console.log(birth)

// // let birthMethod2 =  new Date(birth.getFullYear(), birth.getMonth() , birth.getDate())
// // console.log(birthMethod2)

// // let birthMethod3 = Date.parse(birth)
// // console.log(new Date(birthMethod3))

// // let start = performance.now()
// // let a = 0
// //  for (let i=0 ;i<99999 ; i++) {
// //     a += i
// //  }

// //  let end = performance.now()

// //  let time =Math.trunc(end - start);
// //  console.log(`"Loop Took ${time} Milliseconds."`)

// // Write Your Generator Function Here
// // function* gen(){
// //     let index = 14;
// //     let increment = 140;
// //     while(true){
// //         yield index
// //         index += increment
// //         increment += 200
// //     }
// // }
   

// // let generator = gen()

// // console.log(generator.next().value); // {value: 14, done: false}
// // console.log(generator.next()); // {value: 154, done: false}
// // console.log(generator.next()); // {value: 494, done: false}
// // console.log(generator.next()); // {value: 1034, done: false}
// // console.log(generator.next()); // {value: 1774, done: false}
// // console.log(generator.next()); // {value: 2714, done: false}
// // console.log(generator.next()); // {value: 3854, done: false}
// // console.log(generator.next()); // {value: 5194, done: false}
// // console.log(generator.next()); // {value: 6734, done: false}


// // function* genNumbers() {
// //   yield* [1, 2, 2, 2, 3, 4, 5];
// // }
// // function* genLetters() {
// //   yield* ["A", "B", "B", "B", "C", "D"];
// // }

// // // Write Your Generator Function Here
// // function* genAll(){
// //     yield* new Set(genNumbers())
// //     yield* new Set(genLetters())
// // }

// // let generator = genAll();

// // console.log(generator.next()); // {value: 1, done: false}
// // console.log(generator.next()); // {value: 2, done: false}
// // console.log(generator.next()); // {value: 3, done: false}
// // console.log(generator.next()); // {value: 4, done: false}
// // console.log(generator.next()); // {value: 5, done: false}
// // console.log(generator.next()); // {value: "A", done: false}
// // console.log(generator.next()); // {value: "B", done: false}
// // console.log(generator.next()); // {value: "C", done: false}
// // console.log(generator.next()); // {value: "D", done: false}

// // import modeFun from './mod-two'
// // // main.js File
// // const mode = modeFun()
// // // console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// // console.log(mode.a)


// // console.log('A')
// // console.log('B')
// // // window.alert('C')
// // window.alert("Hello world!");
// // console.log('D')


// // let myReq=  new XMLHttpRequest()

// // myReq.open('GET','test.json')

// // myReq.send()
// // console.log(myReq)

// // myReq.onreadystatechange = function ()
// // {
// //     if (this.status === 200 && this.readyState === 4) {
// //         // console.log(this.responseText)
// //         let jsData =JSON.parse(this.responseText) ;
// //         console.log(jsData)
// //         console.log(jsData.age)
// //     }
// // }


// let content = document.getElementById("content")


// let req = new XMLHttpRequest();

// req.open("GET", "articles.json");

// req.send();

// req.onload = function () {

//   if (this.status === 200) {

//     let data = JSON.parse(this.responseText);
//     data.mainData.forEach(e => {
//         let div = document.createElement("div")
//         div.innerHTML += `<h4>${e.title}</h4>`
//         content.append(div)

 
//     });

//   }

// };



let main = document.getElementById('data')

let req = new XMLHttpRequest()

req.open("GET","articles.json")

req.send()

req.onload = function () {
    if(this.status === 200) {
        console.log(this.responseText)
        let data = JSON.parse(this.responseText)
        data.forEach(ele => {
            let div = document.createElement('div')
            div.innerHTML += `<h1>title: ${ele.title}</h1> <hr>
            <p>author: ${ele.author}</p>
            <hr> <p>section: ${ele.section}</p> <hr>
            <p>content: ${ele.content}</p>
            `
            main.appendChild(div)
        });


    }
}





// req.onload = function() {
//     if(this.status === 200 && this.readyState === 4) {
//         let data = JSON.parse(this.responseText)
//         console.log(data)
//         let mainData = data
//          console.log(mainData)
//         mainData.forEach(e => {
//             e.section = 'All'
//         });
//         console.log(mainData)

//         let updatedData = JSON.stringify(mainData)

//         console.log(updatedData)
//     }

  
// }
//   req.onloadend = function () {
//     console.log("Data Loaded")
// }