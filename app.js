// const index=require('./index');
// const arr=["aliabbas","makefunc","Iamhere","alin"];

// const res=arr.filter((item)=>{
//     return item.length < 5;
// });
//console.log(res);
// console.log(index.ks);
// console.log(index.xx);


//core modules in Node.js
//1>core module=>need to import like fs
//2>global module =>already created modules like buffer http and console
//example
// const fs=require("fs");
// fs.writeFileSync("hello.txt","ali here");

// you can also import only one function
// const fs=require('fs').writeFileSync;



// 3rd Lecture
//Make Basic Server //Function as Param in node 
//http module handle requests
// const http=require('http');
// //when ever the req hit 5000 port, it returns hello
// http.createServer((req,resp)=>{
//     resp.write("<h1>hello word </h1>");
//     resp.end();

// }).listen(4500);


// convert normal function to arrow function
// const datares=()=>{
//     return "data object"
// }
// console.log(datares());




//4th Lecture (Package.JSON)
//gets details (git rep,what commands, packages i.e mongo)
//npm init for creating package file for all external pckgs
//imp:= node js is single threaded single vs multi......pending
//npm install cmd install all dependencies



// 5th Lecture (correct way to push to GIT exclude module file 
// because of heavy size)
// 1>create .gitignore 
//2> /node_modules



//6th Lecture
//Nodemon time saving (npm i nodemon -g)

//imp:> NodeJs is async (if second script is on wait it will not wait 
// to finish the script and execute the code further)


// 7th Lecture (Make Simple API) 1:34


//8th Lecure  

//const fs=require('fs');
// const input=process.argv;
// fs.writeFileSync(input[2],input[3]);

// const path=require('path');
// const dirPath=path.join(__dirname,'files');
// console.log(dirPath);

// fs.writeFileSync(dirPath+"hello","this is new");

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach(item => {
//         console.log(item);
//     });
// });

//buffer is temporary memory which node needs 


//Asynchronous JS

//suppose we have three function 1 load user 2nd products
//in synchronous programming user load then products (simple
//task performed one at a time)

//in Async second task don't wait to finish First task 
//example sync and async
// console.log("Start exe");
// setTimeout(() => {
//     console.log("logic exe");
// }, 2000);

// console.log("end exe");
//In asynce it don't have to be wait....

//Drawback=>problem is that 
// let a=10;let b=0;
// setTimeout(() => {
//     b=20;
// }, 2000);
// console.log(a+b); output should be:30 but its 10


//10th Lecture
//Above problem should be handled shtough PROMISE
// let a=10;
// let waitingData=new Promise((resolve,reject)=>{
// setTimeout(() => {
//     b=20;
//     resolve(b);
// }, 2000);
// });

// waitingData.then((data)=>{
// console.log(a+data);
// });



//11th Lecture
//Call Stack, Node API, Callback_Queue (called EventLoop)
//Async Node.Js
// let a=10;let b=20;let c=0;
// console.log(a);
// console.log(b);
// c=a+b;
// console.log(c);


// const express = require('express');
// const app = express();
// app.get('/about', (req, res) => {
//         const person = [{
//                 name: "ali",
//                 age: 20,
//                 prof: "algo"
//         },
//         ];

//         res.send(person);
// });
// app.get('/home', (req, res) => {
//         const res1="home here"
//         res.send(res1);
// });
// app.get('/main', (req, res) => {
//         const main="main section"
//         res.send(main);
// });
// app.listen(8080);


// console.log("somechanges here");






//Lecture 12
//......we are going dynamic pages thats why we use 
//ejs pckg (template engine)
// app.set('view engine', 'ejs');
// app.get('/profile', (req, res) => {
//         const person = {
//                 name: "ali",
//                 age: 20,
//                 prof: "algo",
//                 skills:['php','unity','C','java']
//         };
//        res.render('profile',{person});
// });
// app.get('/login', (req, res) => {
//         const login="login";
//        res.render('login',{login});
// });
// app.listen(8080);

//including header file should be use for render 
//html in common files like I created login & profile
//file I want to reuse html in both files soo I use header.ejs file 




// Lecture 13 Middlewaress
// what is ? 

//these are function used with routes we modify request and response
//because if we want to restrict our site in some country we have to use 
//middleware .....we can create only one time and use again and again



//first create basic routes
 //const { response } = require('express');
const express = require('express');
 const app = express();

// //application level middleware
// const reqFilter=(req,res,next)=>{
//         if(!req.query.age){
//                 res.send("Plz provide age");
//         }
//         else if(req.query.age<18){
//                 res.send("you cannot access");
//                 console.log("you cannot access");
//         }
//         else{

//                 next();
//         }
// }
// app.use(reqFilter); (application level)

// app.get('/login',reqFilter, (req, res) => { //route level
//         const login="login";
//        res.send(login);
// });

// app.get('/users', (req, res) => {
//         const user="users";
//        res.send(user);
// });
// app.listen(5000);



//now we are moving route level middleware which work on single route and multiple group routees
//Studied now mongo db



// Lecture 13 Mongo DB
// For create conecttion
// Npm i mongodb===>command

/*This is by using simple mongo db data get */

// const MongoClient=require('mongodb').MongoClient;
// const url='mongodb://127.0.0.1:27017';
// const client=new MongoClient(url);
// const database='e-comm';
// async function dbConnection(){
//          let result=await client.connect();
//          let db=result.db(database);
//          return db.collection('products');
//         // let response=await(collection.find({name:"camera"}).toArray());
//         // console.log(response);
// }


// console.log(dbConnection());
// dbConnection().then((resp)=>{
// // console.log(resp.find().toArray());
// resp.find().toArray().then((d)=>{
// console.log(d);
// });
// });


/*by using export and Import method */

const dbConnection=require('./mongodb');


//Getting data using Express
// const getdata=async ()=>{
//       //console.log(dbConnection);
//         let data =await dbConnection();
//         data=await data.find().toArray();
//         console.log(data);
//         //console.log(dbConnection);
// }



//getting data by using Postman using NodeJS,Mongo,and Express
// app.get('/',async (req,resp)=>{
//   let data =await dbConnection();
//   data=await data.find().toArray();
//   resp.send(data);
// });
// app.listen('5000');

app.use(express.json());
//Now we are going to send data and save in DB with Postman
app.post('/',async (req,resp)=>{
  console.log(req.body);
  let data =await dbConnection();
  let result=await data.insert(req.body);
 
  resp.send(result);
});

app.listen('5000');


