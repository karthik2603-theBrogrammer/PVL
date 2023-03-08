const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
app.use(bodyParser.json());
require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'karthik',
    password: 'karthik',
    database: 'pvldb'
  });
  
  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to database:', error);
    } else {
      console.log('Connected to database');
    }
  });
  


  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'User Not Found!' });
      } else {
        const user = results[0];
  
        bcrypt.compare(password, user.password, (error, isMatch) => {
          if (error) {
            console.error('Error comparing passwords:', error);
            res.status(500).json({ message: 'Internal server error' });
          } else if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
          } else {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
          }
        });
      }
    });
  });

  app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // validate username and password
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // hash the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // insert the new user into the "users" table
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(sql, [username, hashedPassword], (error, result) => {
    if (error) {
      console.error('Error registering user:', error);
      return res.status(500).json({ error: 'Error registering user' });
    } else {
      return res.status(200).json({ message: 'User registered successfully' });
    }
  });
});
app.get('/posts', (req, res) => {
    const sql = 'SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id';
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Error fetching posts' });
      } else {
        return res.status(200).json({ posts: results });
      }
    });
  });
  app.get('/posts/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = 'SELECT * FROM posts WHERE user_id = ?';
    connection.query(sql, [userId], (error, results) => {
      if (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Error fetching posts' });
      } else {
        return res.status(200).json({ posts: results });
      }
    });
  });
  app.post('/posts/new', (req, res) => {
    const { title, content, userId } = req.body;
  
    if (!title || !content || !userId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const sql = 'INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)';
    connection.query(sql, [title, content, userId], (error, results) => {
      if (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ error: 'Error creating post' });
      } else {
        return res.status(201).json({ message: 'Post created successfully' });
      }
    });
  });
      

app.listen(8080, () => {
    console.log('Listening to Port 8080')
})