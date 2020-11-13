
const express =require('express');
const app = express();

// express automatically gets  application/JSON

app.get('/', (req,res)=>{
    // res.send(`<h1>Hello???</h1>`)
    const user = {
        name: 'Frank',  
        hobby: 'programming'
    }
    // res.send(`Hello???${user.name}`)
    res.send(user)
})

// every time, we refresh the browser,
// its always GET request
app.post('/profile', (req,res)=>{
    // res.send(`<h1>Hello???</h1>`)
    const user = {
        name: 'Frank',  
        hobby: 'programming'
    }
    // res.send(`Hello???${user.name}`)
    res.send(user)
})

app.listen(9999)
