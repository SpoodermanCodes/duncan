import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function NewsPage() {
  let articles: import('@/types').NewsArticle[] = []
  try {
    articles = await prisma.newsArticle.findMany({ orderBy: { createdAt: 'desc' } })
  } catch {}

  return (
    <div className="container mx-auto px-4 py-10 space-y-10 animate-slide-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-green-400">NEWS &amp; UPDATES</h1>
        <p className="text-gray-400">Stay up to date with the latest in GPU technology.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.id}`}
            className="group bg-black/40 border border-gray-800 rounded-xl overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500">
                {new Date(article.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </p>
              <p className="text-gray-400 line-clamp-3 text-sm">
                {article.content.substring(0, 200)}...
              </p>
              <span className="inline-block text-green-400 font-semibold text-sm group-hover:underline">
                READ MORE →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No news articles found. Please seed the database.</p>
        </div>
      )}
    </div>
  )
}
