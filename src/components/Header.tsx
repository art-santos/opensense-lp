"use client"

import { Button } from './Button'
import nft1 from '@/public/images/logo/open-sense.svg'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Header() {
  return (
    <header>
      <nav className=" bg-white flex items-center justify-around border-2 w-full z-100 p-6 px-0 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Open Sense</span>
            <img className="h-8 w-auto" src={nft1.src} alt="" />
          </a>
        </div>
   
   <div className='flex gap-0 md:gap-2'>
        <div className=" lg:flex lg:flex-1 px-1 md:px-4 lg:justify-end">
            <Button invert href="https://github.com/opensensepw">Star</Button>
        </div>
        <div className=" lg:flex lg:flex-1 px-1 md:px-4 lg:justify-end">
            <Button href="https://twitter.com/opensensepw">Follow</Button>
        </div>
        </div>
      </nav>
     
    </header>
  )
}
