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

// single data
app.get('/allChef/:id',(req,res)=>{
  const id = req.params.id;
  const singleData = allChef.find(data => data.id == id)
  res.send(singleData)
})

app.listen(port, () => {
  console.log(`chef server is running on ${port}`)
})