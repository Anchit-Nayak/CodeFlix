import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='bg-[url(https://media1.giphy.com/media/PTFRmGOgiPUS4/giphy.gif?cid=ecf05e47ozmdxno4v0t7zwpa4109g16vtuq0i317kisw4oxs&rid=giphy.gif&ct=g)] h-screen bg-no-repeat bg-cover'>

      <div className="font-sans text-gray-700">
        <div className="container mx-auto p-8 px-10 flex">
          <div className="max-w-md w-full mx-auto" aria-live="polite">
            <div className='rounded-lg overflow-hidden shadow-2xl p-5 h-full w-full bg-gray-500 rounded-md mt-20 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100'>
            <p className="text-4xl text-center mb-12 font-thin">Mario's Enterprise</p>
            <p className="description p-4 text-xl">Sign in via magic link with your email below</p>
            {loading ? (
              'Sending magic link...'
            ) : (
              <form onSubmit={handleLogin} className='p-5'>
                <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-600'>Email</label>
                <input
                  id="email"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow" aria-live="polite">
                  Send magic link
                </button>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
