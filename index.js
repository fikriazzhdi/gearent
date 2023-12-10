const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')


app.use(bodyParser.json())

app.get('/', (req, res) => {
    response(200, "coba", "Hello World", res)
})

app.get('/users', (req, res) => {
  const sql = "SELECT * FROM users"
  db.query( sql, (error, result) => {
    response(200, result, "Data dari tabel users", res)
    })
})

app.get("/users/:username", (req, res) => {
  const username = req.params.username
  const sql = 'SELECT * FROM users WHERE username = ${username}'
  db.query(sql, (error, result) => {
  if (error) throw error
  response(200, result, 'Data dari tabel users', res) })
  })



app.post('/login', (req, res) => {
    response(200, "coba", "login", res)
})

app.put('/update', (req, res) => {
    response(200, "coba", "update", res)
})

app.put('/delete', (req, res) => {
    response(200, "coba", "delete", res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})