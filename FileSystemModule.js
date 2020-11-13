/*
    I just imported the FS module 
    that comes with node and
    the FS module has a method
    readFile() that

    The first parameter is actual file that 
    we want to do, so the path to the file, 
    which we don't have yet.

    Need to do encoding or you will get
    <Buffer 41>



    So the 'readFile' reads the file 
    as the name suggests, 
    and it's going to spit out 
    whatever it's reading.

    Data.toString('utf8')

    Just so you know
    'toString()' does something, 
    by default 
    if you don't add anything, 
    it's going to use the
    encoding called UTF 8 
    and UTF 8 is a type of a coding.


    It's a way for us 
    to have characters,
    whether they're Latin characters, 
    you know ABC's or we have Korean,
    Japanese, Chinese characters.

    they're all represented by 
    a number, and 
    UTF 8 is a way of encoding these.
*/

// file system
const fs = require('fs');


// CreateOnceWriteOnce
// Create ONCE and then  Write ONCE
const createWriteOnce = fs.writeFile('./3.txt', 'Create ONCE and then  Write ONCE', err =>{
    if(err){
        console.log(err);
    }
})

// Create A File if not exist but it keeps adding content
const create = fs.appendFile('./3.txt', 'hey, just creating files', err => {
    if(err){
        console.log(err);
    }
})

// // READ asynchronous
const READasynchronous=  fs.readFile('./3.txt', (err, data)=>{
    if(err){
        console.log("error", err)
    }
    console.log('async', data.toString());
})

// READ Synchronous
const READsynchronous = fs.readFileSync('./readSync.txt')

// DELETE files
const DELETEfiles = fs.unlink(`./deleteFileOnce.txt`, err =>{
    if(err) console.log(err)
})