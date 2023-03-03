const express = require('express');
const app = express();
const PORT = 8000;

const savage = {
    'rapper' : {
        'age' : 20,
        'birthName': 'birthName',
        'birthLocation': 'birthLocation'
    },
    'rapper2' : {
        'age' : 25,
        'birthName': 'birthName2',
        'birthLocation': 'birthLocation2'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname  + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    response.json(savage[rapperName])
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}!`)
})
