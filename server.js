const express = require('express')
const app = express()
const { PORT = 3000 } = process.env
//const PORT = 3000

console.log('PORT', PORT);

app.get('/', (req, res) => res.send('Hello world!!!'))

app.listen(PORT, () => {
    console.log('Listening at ' + PORT);
})
