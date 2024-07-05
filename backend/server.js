const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
)
app.use(express.json())
app.use(cookieParser())

const port = 4000

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'admin',
})

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)

  db.query(
    'INSERT INTO `login`(`username`, `email`, `password`) VALUES (?,?,?)',
    [username, email, hashedPassword],
    (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Error registering user' })
      } else {
        res.status(200).send({ message: 'User Registered Successfully' })
      }
    },
  )
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  db.query(
    'SELECT * FROM login WHERE email = ?',
    [email],
    async (err, result) => {
      if (err || result.length === 0) {
        res.status(401).send({ message: 'User not found' })
      } else {
        const user = result[0]
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          res.status(401).send({ message: 'Incorrect password' })
        } else {
          const token = jwt.sign({ id: user.id }, 'secret_key', {
            expiresIn: '1hr',
          })
          res.cookie('token', token, { httpOnly: true })
          res.status(200).send({ message: 'Successfully logged In' })
        }
      }
    },
  )
})

app.get('/protected', (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' })
  }
  try {
    const decoded = jwt.verify(token, 'secret_key')
    res.status(200).send({ message: 'Access granted', user: decoded })
  } catch (err) {
    res.status(401).send({ message: 'Invalid token' })
  }
})

app.listen(port, () => {
  console.log('Server is running on Port 4000')
})
