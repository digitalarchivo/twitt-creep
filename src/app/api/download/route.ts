// pages/api/download.js

import { promises as fs } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const usernames = req.body.usernames
      const filePath = path.join(process.cwd(), `Accounts ${new Date(Date.now()).toDateString()}.txt`)
      await fs.writeFile(filePath, JSON.stringify(usernames, null, 2))
  
      // Read the file as a Buffer
      const file = await fs.readFile(filePath)
  
      // Set the correct headers
      res.setHeader('Content-Type', 'text/plain')
      res.setHeader('Content-Disposition', `attachment; filename=${path.basename(filePath)}`)
  
      // Send the file as a Blob
      res.status(200).send(file)
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed for you`)
    }
  }
