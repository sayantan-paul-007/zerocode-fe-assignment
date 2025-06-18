import LoginForm from '@/components/login-form'
import Logo from '@/components/Logo'
import Themetoggle from '@/components/theme-toggle'
import React from 'react'

const Login = () => {
  return (
    <main>
      <nav className='px-6 py-4 flex items-center justify-between fixed w-full'>
        <div className='flex items-center gap-2'>
          <Logo width={44} height={44} />
          <h1 className='text-2xl font-bold font-mono'>ChatterBot</h1>
        </div>
      <Themetoggle  />
      </nav>
      <section className='flex flex-col  items-center justify-center h-screen'>
        <div className="border border-border w-full max-w-md p-6 rounded-lg shadow-md">
           <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
             <LoginForm />
        </div>
  
      </section>
    </main>
  )
}

export default Login