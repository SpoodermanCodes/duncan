import { prisma } from '@/lib/prisma'
import NewsSlider from '@/components/NewsSlider'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  let news: import('@/types').NewsArticle[] = []
  try {
    news = await prisma.newsArticle.findMany({ orderBy: { createdAt: 'desc' }, take: 5 })
  } catch {}

  const displayNews = news.length > 0 ? news : [
    {
      id: '1',
      title: 'Welcome to GraphixMart',
      content: 'The ultimate destination for gamers.',
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/ozqDihdWshdHA5AE2Mfu3g-970-80.jpg.webp',
      createdAt: new Date(),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-10 space-y-16 animate-slide-in">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-green-400 tracking-tighter">
          GRAPHIX<span className="text-cyan-400">MART</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Experience the next generation of performance. We provide the latest GPUs to power your passion.
        </p>
      </section>

      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-bold text-green-500">LATEST NEWS</h2>
          <Link href="/news" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
            VIEW ALL NEWS →
          </Link>
        </div>
        <NewsSlider articles={displayNews} />
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/40 border border-green-900 p-8 rounded-xl space-y-4 hover:border-green-500 transition-all">
          <h3 className="text-2xl font-bold text-green-400">Premium Hardware</h3>
          <p className="text-gray-400">
            We source only the highest quality components from industry leaders like NVIDIA, AMD, ASUS, and Gigabyte.
          </p>
          <Link href="/products" className="inline-block text-green-500 font-bold border-b border-green-500">
            BROWSE PRODUCTS
          </Link>
        </div>
        <div className="bg-black/40 border border-cyan-900 p-8 rounded-xl space-y-4 hover:border-cyan-500 transition-all">
          <h3 className="text-2xl font-bold text-cyan-400">Expert Support</h3>
          <p className="text-gray-400">
            Our team of hardware experts is ready to help you with driver issues, configuration, and maintenance.
          </p>
          <Link href="/support" className="inline-block text-cyan-500 font-bold border-b border-cyan-500">
            GET SUPPORT
          </Link>
        </div>
      </section>
    </div>
  )
}
