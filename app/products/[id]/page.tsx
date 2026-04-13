import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import BuyButton from './BuyButton'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  let product = null
  try {
    product = await prisma.product.findUnique({ where: { id } })
  } catch {}

  if (!product) return notFound()

  return (
    <div className="container mx-auto px-4 py-16 animate-slide-in">
      <Link href="/products" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block font-semibold">
        ← BACK TO PRODUCTS
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-black/60 border-2 border-cyan-500 rounded-xl p-8 sticky top-24">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-green-400 mb-2">{product.name}</h1>
            <p className="text-xl text-gray-400">{product.brand}</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-4xl font-bold text-cyan-400">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <>
                <span className="text-2xl text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                <span className="text-green-400 font-bold text-lg">
                  Save ${(product.oldPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 space-y-4">
            <h3 className="text-xl font-semibold text-green-400">Technical Specifications</h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-300">
              <li><span className="text-gray-500 block text-sm">Memory Size</span>{product.memory}</li>
              <li><span className="text-gray-500 block text-sm">Boost Clock</span>{product.boostClock}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <BuyButton />
          </div>

          <div className="pt-8 border-t border-gray-800">
            <h4 className="text-lg font-bold text-cyan-400 mb-4">Why Buy From Us?</h4>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-green-500 font-bold">Free Shipping</p>
                <p className="text-gray-400">On all orders above $500</p>
              </div>
              <div>
                <p className="text-green-500 font-bold">2-Year Warranty</p>
                <p className="text-gray-400">Manufacturer backed warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
