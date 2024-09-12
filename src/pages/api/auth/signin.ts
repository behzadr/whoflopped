import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '@/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.rows[0].password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET as string, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error signing in' });
    }
};

export default handler;
