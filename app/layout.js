import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'My portfolio',
  description: 'Created by Mario Radano',
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </head>
      <body className={rubik.className}>
        {children}
        </body>
    </html>
  )
}
