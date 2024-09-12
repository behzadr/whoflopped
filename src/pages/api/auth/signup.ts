import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
            [email, hashedPassword]
        );

        res.status(201).json({ message: 'User created successfully', userId: result.rows[0].id });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

export default handler;
