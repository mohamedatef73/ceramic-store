import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany()
      res.status(200).json(users)
    } catch (error: any) {
      console.error('Error fetching users:', error.message || error)
      res.status(500).json({ error: 'Failed to fetch users', details: error.message || error })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
