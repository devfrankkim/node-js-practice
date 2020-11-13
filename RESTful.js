const express =require('express');
const app = express();
const bodyParser = require('body-parser')

// To use urlencoded & json() format 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req,res)=> {
    console.log(req.query)
    console.log(req.headers)
    console.log(req.params)
    res.send('getting root')
})


app.get('/:id', (req,res)=> {
    console.log(req.params)
    // res.send('Get params')

    res.status(400) ? 
    res.send('Render with new data') :
    res.status(404).send('Not Found') 
})

app.get('/profile', (req,res)=>{
    res.send('Getting profile!')
})

app.post('/profile', (req,res)=>{
    // const user = {
    //     name: 'Frank',  
    //     hobby: 'programming'
    // }

 // We can add req.body in our database
  console.log('req.body', req.body); // need middlware 
    
  res.status(400) ? 
  res.send('Render with new data') :
  res.status(404).send('Not Found')
})

app.listen(9999)





// app.get('/profile', (req,res)=>{
//     // res.send(`<h1>Hello???</h1>`)
//     const user = {
//         name: 'Frank',  
//         hobby: 'programming'
//     }
//     // res.send(`Hello???${user.name}`)
//     res.send('Getting profile!')
// })





















