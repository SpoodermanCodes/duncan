import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { id } = await params
  let article = null
  try {
    article = await prisma.newsArticle.findUnique({ where: { id } })
  } catch {}

  if (!article) return notFound()

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-slide-in">
      <Link href="/news" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block font-semibold">
        ← BACK TO NEWS
      </Link>

      <article className="space-y-8">
        <div className="rounded-xl overflow-hidden border-2 border-green-900">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            {new Date(article.createdAt).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="bg-black/30 border border-gray-800 rounded-xl p-8">
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
            {article.content}
          </div>
        </div>
      </article>
    </div>
  )
}
