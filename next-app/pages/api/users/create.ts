// pages/api/users/create.js
// export default function handler(req, res) {
//     if (req.method === 'POST') {
//       // Handle the request
//       res.status(200).json({ message: 'User created' });
//     } else {
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//       console.log("we are here")
//     }
//   }
  
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Here, add your logic to handle user creation, such as saving to a database
    // For demonstration purposes, we'll just return the received data

    res.status(200).json({ message: 'User created', name, email });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
