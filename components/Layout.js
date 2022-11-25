import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import {} from 'react'
import {useState, useEffect, useContext} from 'react'
import {Store} from '../utils/Store'
import {Menu} from '@headlessui/react'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import {useSession} from 'next-auth/react'
import DropdownLink from './DropdownLink'

const Layout = ({children, title}) => {
  const {status, data: session} = useSession()
  const {state, dispatch} = useContext(Store)
  const {cart} = state

  const [cartItemsCount, setCartItemsCount] = useState(0)
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
  }, [cart.cartItems])

  const logoutClickHandle = () => {
    console.log('Hello')
  }
  return (
    <>
      <Head>
        <title>{title ? title + ' -Amazon' : 'Amazon'}</title>
        <meta name='description' content='E-commerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ToastContainer position='bottom-center' limit={1} />
      <div className='flex min-h-screen flex-col justify-between '>
        <header>
          <nav className='flex h-12 justify-between items-center px-4 shadow-md'>
            <Link href='/'>
              <a className='text-lg font-bold'>amazon</a>
            </Link>
            <div>
              <Link href='/Cart'>
                <a className='p-2'>
                  Cart
                  {cartItemsCount > 0 && (
                    <span className='text-xs ml-1 rounded-full bg-red-600 px-2 py-1 font-bold text-white '>
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as='div' className='relative inline-block'>
                  <Menu.Button className='text-blue-600'>{session.user.name}</Menu.Button>
                  <Menu.Items className='absolute right-0 w-56 bg-white origin-top-right shadow-lg'>
                    <Menu.Item>
                      <DropdownLink className='dropdown-link' href='/Profile'>
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink className='dropdown-link' href='/order-history'>
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a className='dropdown-link' href='#' onClick={logoutClickHandle}>
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href='/Login'>
                  <a className='p-2'>Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4 '>{children}</main>
        <footer className='flex justify-center items-center h-10 shadow-inner'>
          Copyright @ 2022 Amazon
        </footer>
      </div>
    </>
  )
}

export default Layout
