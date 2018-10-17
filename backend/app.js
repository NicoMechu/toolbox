const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/echo', function(req, res, next){
  if (!req.body.echo){
    return res.status(400).json({error:'Missing required param "echo"'})
  }
  res.send({response: req.body.echo})
})

app.listen(port)

module.exports = app