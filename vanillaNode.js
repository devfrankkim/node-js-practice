
const http = require('http');

// I'm going to remove the console log and use the parameters that 'createServer' gets us.
// two params
const server = http.createServer((request, response) => {
    // console log - yes
    // no response yet
    console.log('I hear you!');
    
    /*
    'Content-Type' – 
    we're letting you know what kind of content 
    we were going to send and it's going to be

    'text/html' – 
    and this is just the standard way of 
    declaring content type and 
    we'll say 'response.end()' with
    */
    console.log('headers', request.headers);
    console.log('method', request.method);
    console.log('url', request.url);
    // response.setHeader('Content-Type', 'text/html')
    // you can send JS object with this type

    const user = {
        name: 'Frank',
        hobby: 'programming'
    }

    response.setHeader('Content-Type', 'application/json')
    /*
        Now this user, I can pass here, 
        but remember 
        in order to transfer 
        between the wires we need to use
        JSON.stringify()

        We're changing this object into a JSON string 
        so that we can send it over the wires.
    */
    response.end(JSON.stringify(user))
    // response.end(`<h1>${JSON.stringify(user)}</h1>`)
})

 
server.listen(9999);