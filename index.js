const express = require('express')

const app = express()
const PORT = 3000



app.get('/', (req, res) => {
    res.send(`This site is parked.`)
})

app.listen(PORT,() => {
    console.log("App listening on port " + PORT)
})