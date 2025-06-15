const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const cors = require('cors');

const SECRET = 'secretkey';
const USERS_FILE = './data/users.json';
const RESTAURANTS_FILE = './data/restaurants.json';

const app = express();
app.use(cors());
app.use(express.json());

function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function saveUsers(users) {
  fs.mkdirSync('./data', { recursive: true });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function loadRestaurants() {
  if (!fs.existsSync(RESTAURANTS_FILE)) return [];
  return JSON.parse(fs.readFileSync(RESTAURANTS_FILE));
}

app.post('/api/signup', async (req, res) => {
  const { username, email, password, postalCode } = req.body;
  if (!username || !email || !password || !postalCode) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const users = loadUsers();
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: Date.now(), username, email, password: hashed, postalCode };
  users.push(user);
  saveUsers(users);
  res.status(201).json({ message: 'User created' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token' });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

app.get('/api/restaurants', (req, res) => {
  const { status, type, maxPrice, postalCode } = req.query;
  let restaurants = loadRestaurants();
  if (status === 'open') {
    const today = new Date();
    restaurants = restaurants.filter(r => new Date(r.open) <= today && new Date(r.close) >= today);
  } else if (status === 'upcoming') {
    const today = new Date();
    restaurants = restaurants.filter(r => new Date(r.open) > today);
  }
  if (type) restaurants = restaurants.filter(r => r.type.toLowerCase().includes(type.toLowerCase()));
  if (maxPrice) restaurants = restaurants.filter(r => r.avgPrice <= parseFloat(maxPrice));
  if (postalCode) restaurants = restaurants.filter(r => r.postalCode === postalCode);
  res.json(restaurants);
});

app.get('/api/user/me', authMiddleware, (req, res) => {
  const users = loadUsers();
  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  const { password, ...userData } = user;
  res.json(userData);
});

app.put('/api/user/update', authMiddleware, (req, res) => {
  const { username, email, postalCode } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  if (username) user.username = username;
  if (email) user.email = email;
  if (postalCode) user.postalCode = postalCode;
  saveUsers(users);
  res.json({ message: 'Updated' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
