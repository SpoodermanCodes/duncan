import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json()
  if (!username || !email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) return NextResponse.json({ error: 'Email already in use' }, { status: 400 })
  const hashed = await bcrypt.hash(password, 10)
  await prisma.user.create({ data: { username, email, password: hashed } })
  return NextResponse.json({ ok: true })
}
