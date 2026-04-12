import { prisma } from '@/lib/prisma'
import ProductCard from '@/components/ProductCard'

export const dynamic = 'force-dynamic'

export default async function ProductsPage() {
  let products: import('@/types').Product[] = []
  try {
    products = await prisma.product.findMany({ orderBy: { name: 'asc' } })
  } catch (e) { console.error('Products DB error:', e) }

  return (
    <div className="container mx-auto px-4 py-10 space-y-10 animate-slide-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-green-400">OUR PRODUCTS</h1>
        <p className="text-gray-400">Premium GPUs for every workstation and gaming setup.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No products found. Please seed the database.</p>
        </div>
      )}
    </div>
  )
}
