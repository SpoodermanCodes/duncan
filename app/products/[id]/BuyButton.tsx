'use client'
import { useState } from 'react'

export default function BuyButton({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false)

  async function handleBuy() {
    setLoading(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    })
    const { url, error } = await res.json()
    if (error) { alert(error); setLoading(false); return }
    window.location.href = url
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="block mx-auto mt-6 border-2 border-green-500 text-green-400 bg-black px-6 py-3 rounded font-bold hover:shadow-[0_0_10px_rgba(120,187,187,0.8)] transition-shadow disabled:opacity-50"
    >
      {loading ? 'Processing...' : 'BUY NOW'}
    </button>
  )
}
