// pages/api/users/create.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../backend/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name } = req.body;
    try {
      const newUser = await prisma.user.create({
        data: { email, name },
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'User creation failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
