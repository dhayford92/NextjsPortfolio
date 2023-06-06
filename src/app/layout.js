import Navbar from '@/componets/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/componets/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'New Website',
  description: 'My new website using react and nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
