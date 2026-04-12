'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    if (mode === 'signup') {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: form.username, email: form.email, password: form.password }),
        })
        const data = await res.json()
        if (!res.ok) {
          setError(data.error || 'Signup failed.')
          setStatus('error')
          return
        }
        // Auto-login after signup
        const result = await signIn('credentials', {
          redirect: false,
          username: form.username,
          password: form.password,
        })
        if (result?.ok) router.push('/')
        else { setError('Signed up but login failed. Please login manually.'); setStatus('error') }
      } catch {
        setError('Network error. Please try again.')
        setStatus('error')
      }
    } else {
      const result = await signIn('credentials', {
        redirect: false,
        username: form.username,
        password: form.password,
      })
      if (result?.ok) {
        router.push('/')
      } else {
        setError('Invalid username or password.')
        setStatus('error')
      }
    }
  }

  const inputClass = "w-full px-4 py-3 bg-black border border-cyan-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 animate-slide-in">
      <div className="w-full max-w-md bg-[#1E1E1E] rounded-2xl p-10 shadow-[0_0_30px_5px_rgba(34,211,238,0.15)]">
        <div className="flex mb-8 rounded-lg overflow-hidden border border-gray-700">
          <button
            id="login-tab"
            onClick={() => { setMode('login'); setError('') }}
            className={`flex-1 py-3 font-bold text-sm transition-colors ${mode === 'login' ? 'bg-green-500 text-black' : 'text-gray-400 hover:bg-gray-800'}`}
          >
            LOGIN
          </button>
          <button
            id="signup-tab"
            onClick={() => { setMode('signup'); setError('') }}
            className={`flex-1 py-3 font-bold text-sm transition-colors ${mode === 'signup' ? 'bg-green-500 text-black' : 'text-gray-400 hover:bg-gray-800'}`}
          >
            SIGNUP
          </button>
        </div>

        <h1 className="text-2xl font-extrabold text-green-400 mb-6 text-center">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-green-400 font-semibold mb-2 text-sm">Username</label>
            <input
              id="username-input"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              className={inputClass}
            />
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-green-400 font-semibold mb-2 text-sm">Email</label>
              <input
                id="email-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>
          )}

          <div>
            <label className="block text-green-400 font-semibold mb-2 text-sm">Password</label>
            <input
              id="password-input"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder={mode === 'signup' ? 'Minimum 8 characters' : 'Enter your password'}
              className={inputClass}
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center bg-red-900/20 border border-red-800 rounded-lg px-4 py-2">
              {error}
            </p>
          )}

          <button
            id="auth-submit-btn"
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-cyan-500 text-black font-bold text-lg rounded-lg hover:bg-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(34,211,238,0.3)] mt-2"
          >
            {status === 'loading' ? 'Please wait...' : mode === 'login' ? 'LOGIN' : 'SIGN UP'}
          </button>
        </form>
      </div>
    </div>
  )
}
