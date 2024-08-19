const fs = require("fs");


const users = [
    {
        id: 1,
        name: "Ahmed",
        password: "1234"
    },
    {
        id: 2,
        name: "Mohammed",
        password: "123456"
    },
]



let jsonData =[];

fs.readFile('database.json' , 'utf-8' ,(err,data)=>{
    if(err) console.log(err);
    if(data) {
         jsonData = data;
        }
    })


const http = require("http");
const server2 = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    if (req.url == "/") {
        res.end(jsonData)
    }
    else if ( req.url == "/about"){
        res.end("About page")
    }
    else (res.end("404 not found"))})


server2.listen(5000, () => {
    console.log("server is running")
})








// const users = [
//     {
//         id: 2,
//         name: "Mohammed",
//         password: "123456"
//     },
// ]

// fs.writeFile('database.json', JSON.stringify(users) , (err)=>{
//     console.log(err);
// })


// // Push 
// fs.readFile('database.json' , 'utf-8' ,(err,data)=>{
//     if(err) console.log(err);
//     if(data) {
//         const arr = JSON.parse(data);
//         arr.push(users[0]);
//         fs.writeFile('database.json' , JSON.stringify(arr) ,(err)=>{
//             if(err) console.log(err);
//         })
//     }

// })


// // //update
// fs.readFile('database.json' , 'utf-8' ,(err , data)=>{
//     if(err) console.log(err);
//         let arr = JSON.parse(data);
//         arr = arr.find((e)=>e.id ==1)

//         //arr[arr.findIndex((e)=> e.id == 0)].name="Ahmed"
//         fs.writeFile('database.json' , JSON.stringify(arr) ,(err)=>{
//             if(err) console.log(err);
//         })


// })



//delete
// fs.readFile('database.json' , 'utf-8' ,(err,data)=>{
//     if(err) console.log(err);
//     if(data) {
//         const arr = JSON.parse(data);
//         arr = arr.filter((e)=>e.id == 1);
//         fs.writeFile('database.json' , JSON.stringify(arr) ,(err)=>{
//             if(err) console.log(err);
//         })
//     }

// })


//[{"id":2,"name":"Mohammed","password":"123456"},{"id":2,"name":"Mohammed","password":"123456"}]








//const name = Date.now();
// fs.writeFile(`${name}.txt` , `${name} ` , (err)=>{
//     if(err) console.log(err);
//     else {console.log("file Created")}
// })




// if(fs.existsSync("data.json")){
//     console.log("file exists")}
//     else {
//         console.log("file doesn't exist");
//     }




// fs.writeFile("index.html", "<h1>Hello World </h1>", (err, data) => {
//     if (err) console.log(err);
//     else {console.log("file HTML")}


// })







// fs.readFile('text.txt', 'utf8' , (err,data)=>{
//     if(err) console.log(err);
//     if(data) console.log(data)
// });



// fs.writeFile('text.txt' , 'Another Content' , (err)=>{
//     if(err) console.log(err);
//     else {console.log("file written")}
// })


// fs.appendFile('text.txt' , ' Appended statement', (err)=>{
//     if(err) console.log(err);
//     else{console.log("file appended")}
// })





// //JSONData
// const data = [
//     {
//         settingName: "theme",
//         value: "dark",
//     }
// ]

// fs.writeFile('data.txt' , JSON.stringify(data) , (err)=>{
//     if(err) console.log(err);
//     else {console.log("file json")}
// })

// fs.readFile('data.txt', 'utf8' , (err,data)=>{
//     if(err) console.log(err);
//     if(data) console.log(JSON.parse(data))
// });



// ____________________________________________________________


// const http = require("http");
// //CRUD App => Get Post Put Delete
// const server = http.createServer((req,res)=>{
//     //res.write("Hello")
//     res.end("Hello World")
// })

// server.listen(5000, ()=>{
//     console.log("server is running")
// })


// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url =="/"){
//         res.end("Main Page")
//     } else if(req.url == "/about") { res.end("About Page")
//     }
// })

// server.listen(5000, ()=>{
//     console.log("server is running")
// })







// let htmlfile;


// fs.readFile("index.html", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     if (data) htmlfile = data;
// })

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.setHeader("content-type", "text/html")
//     if (req.url == "/") {
//         res.end(htmlfile)
//     }
//     else if ( req.url == "/about"){
//         res.end("About page")
//     }})


// server.listen(5000, () => {
//     console.log("server is running")
// })








// const users = [
//     {
//         id: 1,
//         name: "Ahmed",
//         password: "1234"
//     },
//     {
//         id: 2,
//         name: "Mohammed",
//         password: "123456"
//     },
// ]
// const http = require("http");
// const server2 = http.createServer((req, res) => {
//     res.setHeader("content-type", "application/json")
//     if (req.url == "/") {
//         res.end(JSON.stringify(users))
//     }
//     else if ( req.url == "/about"){
//         res.end("About page")
//     }})


// server2.listen(5001, () => {
//     console.log("server is running")
// })











