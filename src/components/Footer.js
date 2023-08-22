import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className=''>
            <span>Rights</span>
            <Link href='/'>Endengro.online</Link>
            <Link href='/about'>Sobre</Link>
        </Layout>
    </footer>
  )
}

export default Footer