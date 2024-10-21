import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Received data:', req.body); // Log received data

    const { name, email } = req.body;

    try {
      // Check if name or email is missing
      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      // Log the data being sent to Prisma
      console.log('Creating user with:', { name, email });

      const newUser = await prisma.user.create({
        data: { name, email },
      });
      res.status(200).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', );
      res.status(500).json({ error: `Failed to create user: $err.message` });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
