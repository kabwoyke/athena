import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Athena Link",
  description: "An Internet Service Provider(ISP) Company",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`bg-blue-100 justify-between ${inter.className}` }>
        
        <Navbar/>
        {children}
        <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
        </body>
    </html>
  );
}
