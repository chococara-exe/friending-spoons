require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

db.connect(err => {
  if (err) throw err
  console.log('MySQL connected!')
})

// Gets all friends
app.get('/api/friends', (req, res) => {
  db.query('SELECT * FROM friends', (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(results)
  })
})

// Gets all spooners
app.get('/api/spooners', (req, res) => {
  db.query('SELECT * FROM spooners', (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(results)
  })
})

// Gets all friends and spooners
// Adds a new column called 'type' that saves whether the person is a friend or a spooner
app.get('/api/friendsandspoons', (req, res) => {
  const query = `
    SELECT *, 'friend' AS type FROM friends
    UNION ALL
    SELECT *, 'spooner' AS type FROM spooners
  `
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(results)
  })
})

// Creates a user (with name and email)
app.post('/api/makeuser', (req, res) => {
  const { name, email } = req.body
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json({ id: result.insertId, name, email })
  })
})

// Creates a friend (with name, email, age, location)
app.post('/api/makefriend', (req, res) => {
  const { name, email, age, location } = req.body
  db.query('INSERT INTO friends (name, email, age, location) VALUES (?, ?, ?, ?)', [name, email, age, location], (err, result) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json({ id: result.insertId, name, email })
  })
})

// Creates a spooner (with name, email, age, location)
app.post('/api/makespooner', (req, res) => {
  const { name, email, age, location } = req.body
  db.query('INSERT INTO spooners (name, email, age, location) VALUES (?, ?, ?, ?)', [name, email, age, location], (err, result) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json({ id: result.insertId, name, email })
  })
})

app.listen(5000, () => console.log('Server running on port 5000'))