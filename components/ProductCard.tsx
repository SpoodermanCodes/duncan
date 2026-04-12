import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-black border-2 border-cyan-500 p-6 flex flex-col items-center gap-4 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] group">
      <div className="relative w-full h-48 overflow-hidden rounded-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain transition-transform group-hover:scale-105"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-green-400 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-400 mb-1">Boost Clock: {product.boostClock}</p>
        <p className="text-sm text-gray-400 mb-4">Memory: {product.memory}</p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-2xl font-bold text-cyan-400">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-lg text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        {product.oldPrice && (
          <p className="text-green-500 text-sm font-bold mb-4">
            Save ${(product.oldPrice - product.price).toFixed(2)}
          </p>
        )}
        <Link
          href={`/products/${product.id}`}
          className="inline-block px-8 py-2 border-2 border-green-500 text-green-500 font-bold hover:bg-green-500 hover:text-black transition-colors rounded"
        >
          VIEW PRODUCT
        </Link>
      </div>
    </div>
  )
}
