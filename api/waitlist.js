import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const sql = neon(process.env.POSTGRES_URL || process.env.DATABASE_URL);
    
    // Create the table just in case it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      INSERT INTO waitlist (name, email) 
      VALUES (${name}, ${email})
    `;
    
    res.status(201).json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    if (error.message.includes('unique constraint') || error.message.includes('UNIQUE constraint')) {
      return res.status(409).json({ error: 'Email is already on the waitlist' });
    }
    console.error('Waitlist insertion error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
