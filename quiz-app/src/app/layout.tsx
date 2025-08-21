import type { Metadata, Viewport } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const apercu = localFont({
  src: [
    { path: '../../public/fonts/apercu_regular_pro.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/apercu_regular_italic_pro.otf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/apercu_medium_pro.otf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/apercu_medium_italic_pro.otf', weight: '500', style: 'italic' },
    { path: '../../public/fonts/apercu_bold_pro.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/apercu_bold_italic_pro.otf', weight: '700', style: 'italic' },
  ],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'Apple Color Emoji',
    'Segoe UI Emoji',
  ],
})

export const metadata: Metadata = {
  title: 'TechPath Quiz',
  description: 'Discover your ideal tech major with a quick, smart quiz.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3E377A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={apercu.variable}>
      <body className='antialiased'>
        {children}
      </body>
    </html>
  )
}
