//console.log('prakash')
/*------- os : built in module of Node.js -------*/ 
const os = require('os');
//console.log(os);
/*------- we can access user info using node.js os module -------*/ 
let user = os.userInfo()
//console.log(user);
/*------- we can access user info using node.js os module -------*/ 
let name = user.username;
//console.log(name);
/*------- we can find user os -------*/ 
let plat = os.platform();
//console.log(plat);
/*------- fs : built in module of Node.js to read or write document and much more -------*/ 

const fs = require('fs');

let date = new Date();

let message  = `user "${name}" started app at ${date}`
/*------- appendFile() : appendFile and write in to that file 
fs.appendFile('hello.txt',message,(error) => {
    if(error){
        console.log('not able to add file')
    }
})
-------*/
/*---- read file ----*/
//create separate file user.js 
const userData = require('./user.js');

if(userData.addLog()){
    fs.appendFile('hello.txt',message,(error) => {
        if(error){
            console.log('not able to add file')
        }
    })
}
console.log(message)
console.log(userData)