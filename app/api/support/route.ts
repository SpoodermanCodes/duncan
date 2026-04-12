import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { gpu, problem, details, name, email, phone } = await req.json()
  if (!gpu || !problem || !details || !name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  const ticket = await prisma.supportTicket.create({
    data: { gpu, problem, details, name, email, phone: phone || '' },
  })
  return NextResponse.json({ id: ticket.id })
}
