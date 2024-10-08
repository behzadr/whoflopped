import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma'; // Assuming Prisma client is configured

export default async function signInHandler(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        // Find the user by email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Return success (you can also issue a token here)
        return res.status(200).json({ message: 'Sign in successful', user });
    } catch (error) {
        return res.status(500).json({ error: 'Sign in failed' });
    }
}
