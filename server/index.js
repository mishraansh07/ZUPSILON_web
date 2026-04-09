import express from 'express';
import cors from 'cors';
import { initializeDB } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

let db;

app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    await db.run('INSERT INTO waitlist (name, email) VALUES (?, ?)', [name, email]);
    
    res.status(201).json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    if (error.message.includes('UNIQUE constraint failed')) {
      return res.status(409).json({ error: 'Email is already on the waitlist' });
    }
    console.error('Waitlist insertion error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/waitlist/count', async (req, res) => {
  try {
    const result = await db.get('SELECT COUNT(*) as count FROM waitlist');
    res.json({ count: result.count });
  } catch (error) {
    console.error('Waitlist count error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 5000;
initializeDB().then(database => {
  db = database;
  app.listen(PORT, () => {
    console.log(`Backend API running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("Failed to initialize database:", err);
  process.exit(1);
});
