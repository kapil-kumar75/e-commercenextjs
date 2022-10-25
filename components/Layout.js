import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' -Amazon' : 'Amazon'}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between '>
        <header>
          <nav className='flex h-12 justify-between items-center px-4 shadow-md'>
            <Link href='/'>
              <a className='text-lg font-bold'>amazon</a>
            </Link>
            <div>
              <Link href='/cart'>
                <a className='p-2'>Cart</a>
              </Link>
              <Link href='/login'>
                <a className='p-2'>Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4 '>{children}</main>
        <footer className='flex justify-center items-center h-10 shadow-inner'>Copyright @ 2022 Amazon</footer>
      </div>
    </>
  )
}

export default Layout
