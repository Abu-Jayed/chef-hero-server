const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* allChef data */
const allChef = require('./data/allChef.json')
app.get('/allChef',(req,res) =>{
  res.send(allChef)
})

app.listen(port, () => {
  console.log(`chef server is running on ${port}`)
})