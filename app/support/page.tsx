'use client'
import { useState } from 'react'

const GPU_OPTIONS = [
  'RTX 4090', 'RTX 4080 SUPER', 'RTX 4070 Ti SUPER',
  'RX 7900 XTX', 'RX 7800 XT', 'GTX 1660 Ti',
  'RTX 4060 Ti', 'RTX 3080', 'RX 6900 XT', 'RX 7700 XT',
]

const PROBLEM_OPTIONS = [
  'Driver Issue', 'Overheating', 'Performance Drop',
  'Screen Artifacts', 'No Display Output', 'Crashes / BSOD', 'Other',
]

export default function SupportPage() {
  const [form, setForm] = useState({
    gpu: '', problem: '', details: '', name: '', email: '', phone: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage('Your support ticket has been submitted! We will contact you shortly.')
        setForm({ gpu: '', problem: '', details: '', name: '', email: '', phone: '' })
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  const inputClass = "w-full px-4 py-3 bg-black border border-cyan-800 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"

  return (
    <div className="container mx-auto px-4 py-16 animate-slide-in">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold text-green-400">TECH SUPPORT</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Having trouble with your GPU? Our expert team is here to help. Submit a ticket and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-[#1E1E1E] rounded-2xl p-10 shadow-[0_0_30px_5px_rgba(34,211,238,0.15)]">
        {status === 'success' ? (
          <div className="text-center space-y-6 py-8">
            <div className="text-6xl">✅</div>
            <h2 className="text-2xl font-bold text-green-400">Ticket Submitted!</h2>
            <p className="text-gray-300">{message}</p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-green-400 font-semibold mb-2 text-sm">Select Your GPU</label>
              <select name="gpu" value={form.gpu} onChange={handleChange} required className={inputClass}>
                <option value="">-- Select GPU --</option>
                {GPU_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2 text-sm">Type of Problem</label>
              <select name="problem" value={form.problem} onChange={handleChange} required className={inputClass}>
                <option value="">-- Select Problem --</option>
                {PROBLEM_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2 text-sm">Describe the Issue</label>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your problem in detail..."
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2 text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2 text-sm">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2 text-sm">Your Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className={inputClass}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">{message}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 bg-cyan-500 text-black font-bold text-lg rounded-lg hover:bg-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              {status === 'submitting' ? 'Submitting...' : 'SUBMIT REQUEST'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
