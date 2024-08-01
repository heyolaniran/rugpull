import Header from '@/components/Header'
import { LampDemo } from '@/components/ui/waveBg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col items-center p-24 justify-between'>
      <Header />
    </main>
  )
}
