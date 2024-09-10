import { Inter as FontSans, Urbanist } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontLogo = localFont({
  src: './Northstar3D-4D3x.otf',
  variable: '--font-logo'
})

export const fontHeading = localFont({
  src: './BlackOpsOne-Regular.ttf',
  variable: '--font-heading'
})

export const fontGeist = Urbanist({
  subsets: ['latin'],
  variable: '--font-geist'
})
