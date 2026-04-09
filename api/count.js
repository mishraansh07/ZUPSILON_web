import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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

    const result = await sql`SELECT COUNT(*) as count FROM waitlist`;
    res.json({ count: parseInt(result[0].count) });
  } catch (error) {
    console.error('Waitlist count error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
