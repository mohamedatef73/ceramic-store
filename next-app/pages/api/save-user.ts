import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body

    try {
      const newUser = await prisma.user.create({
        data: { name, email },
      })
      res.status(200).json({ message: 'User created successfully', user: newUser })
    } catch (error) {
      console.error('Error creating user:', error)
      res.status(500).json({ error: 'Failed to create user' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
