import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: 'Checkout not available' }, { status: 501 })
}
