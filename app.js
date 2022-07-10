const readline = require("readline-sync")
const fs = require("fs")
const { buffer } = require("stream/consumers")
var checkout = new RegExp("/")
var path = readline.question("path:")
var IsFile = checkout.test(path)
if(IsFile){}else{
    path = '../'+path
}
if(fs.existsSync(path)){
}else{
    console.log("文件位置有误！！！")
    process.exit(0)
}
var key = readline.question("key(number):")
var file = Buffer.from(fs.readFileSync(path))
var newfile = Buffer.allocUnsafe(file.length*key)
var number = file.length +1
for(var i = 1;i < number;i++){
    newfile[(i*key)-1] = file[i-1]
}
fs.writeFileSync(path,newfile)
console.log("success")