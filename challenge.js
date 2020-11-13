const fs = require("fs")
fs.writeFile('./challenge.txt', "((())))", err => {
    console.log(err)
})

function question1(){
    fs.readFile('./challenge.txt', (err,data)=>{
        console.time('question1')
        const directons = data.toString();
        const directionArray = directons.split('');
        const answer = directionArray.reduce((acc, currentValue) =>{
            if(currentValue === "("){
                return acc +=1;
            } else if(currentValue === ")"){
                return acc -=1;
            }
        }, 0)
        console.log(answer)
        console.timeEnd('question1')
    })
}

function question2(){
    fs.readFile('./challenge.txt', (err,data)=>{
        console.time('question2')
        const directons = data.toString();
        const directionArray = directons.split('');
        let accumulate = 0;
        let counter = 0;
        const answer = directionArray.some(currentItem =>{
            if(currentItem === "("){
                accumulate +=1
            } else if(currentItem === ")"){
                accumulate -=1
            }

            counter++; // index
            return accumulate < 0;
        })
        console.timeEnd('question2')
        console.log(counter);
    })
}

question1()
question2()