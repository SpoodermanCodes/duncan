import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { productId } = await req.json()
  const product = await prisma.product.findUnique({ where: { id: productId } })
  if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: product.name, images: [product.imageUrl] },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXTAUTH_URL}/products?success=1`,
    cancel_url: `${process.env.NEXTAUTH_URL}/products/${productId}`,
  })

  return NextResponse.json({ url: session.url })
}
