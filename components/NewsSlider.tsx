'use client'
import { useState, useEffect } from 'react'
import { NewsArticle } from '@/types'
import Link from 'next/link'

interface NewsSliderProps {
  articles: NewsArticle[]
}

export default function NewsSlider({ articles }: NewsSliderProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % articles.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [articles.length])

  if (!articles.length) return null

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg border-2 border-green-500 shadow-lg group">
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {articles.map((article) => (
          <div key={article.id} className="min-w-full relative h-[400px]">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 line-clamp-2">
                {article.title}
              </h3>
              <Link 
                href={`/news/${article.id}`}
                className="inline-block w-fit px-6 py-2 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors"
              >
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={() => setCurrent((prev) => (prev - 1 + articles.length) % articles.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white rounded-full hover:bg-green-500 transition-colors opacity-0 group-hover:opacity-100"
      >
        ←
      </button>
      <button 
        onClick={() => setCurrent((prev) => (prev + 1) % articles.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white rounded-full hover:bg-green-500 transition-colors opacity-0 group-hover:opacity-100"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {articles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-green-500' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  )
}
