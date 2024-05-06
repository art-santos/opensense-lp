import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { HeroHighlight, Highlight } from './HeroHighlight'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroWithPhoneMockup() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      

      <div className="relative isolate pt-14">
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
           
    <HeroHighlight>
    <div className="flex bg-white">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-indigo-600">We’re hiring</span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  See open positions
                  <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </a>
              </div>
            </div>
        <motion.text
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl px-4 md:text-4xl lg:text-xl font-bold text-neutral-900 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
            
          We're
          
          
          <span className="font-permanent-marker text-5xl text-red-600 font-normal whitespace-nowrap">
          {' '}NOT{' '}
                  <span className="inline-flex relative">
                    <svg
                      className="absolute right-0 top-full mt-1 max-w-none -z-10"
                      width="270"
                      height="18"
                      viewBox="0 0 270 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-white"
                        fillRule="nonzero"
                        d="M36.54 1.016C40.01.912 43.39.78 46.95.712 50.51.644 54.071.567 57.81.566c2.744.002 5.018-.162 7.897-.113 9.89.085 20.486.459 31.646 1.116 2.484.151 4.835.242 7.296.39 2.461.147 4.924.282 7.34.413 1.528.069 3.186.202 4.684.31a187 187 0 0 1 4.89.34c3.416.326 6.937.738 10.5 1.23 2.316.32 2.482.762 1.474 1.152-1.082.485-3.3.708-6.3.635-.705-.026-1.39-.039-2.117-.076l-2.202-.137-4.43-.268a899.607 899.607 0 0 1-8.75-.477c-2.953-.174-5.754-.262-8.71-.427-2.955-.165-5.803-.257-8.829-.424-1.786-.084-3.509-.137-5.156-.16-1.697-.039-3.396-.07-5.027-.081l-9.497.059c-6.873.071-13.98.132-20.388.403-4.089.123-7.886.344-11.683.565l-8.169.637c-2.596.256-5.236.496-7.537.828-1.768.261-3.332.576-4.873.895-1.541.319-2.877.683-4.575.95-.775.112-1.367.265-2.142.376-2.903.406-4.781.312-8.094-.282a79.95 79.95 0 0 1-2.301-.412C.465 7.541-.327 6.866.558 6.205c.714-.471 1.384-.971 2.398-1.395 1.013-.424 2.483-.741 3.838-1.08 1.355-.34 3.28-.546 5.025-.802 1.744-.256 3.69-.446 5.594-.66C23.24 1.688 29.49 1.233 36.13.904l.408.112Z"
                        opacity=".32"
                      />
                    </svg>
                    A DAO
                  </span>
                  <span className="text-slate-100">.</span>
                </span>
                <br/>
          <Highlight className="text-black text-left dark:text-white">
          a community to promote open blockchain science, security and education
          </Highlight>
        </motion.text>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
      </HeroHighlight>
            
            
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect width={316} height={684} rx={36} />
                </clipPath>
              </defs>
              <path
                fill="#4B5563"
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              />
              <path
                fill="#343E4E"
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              />
              <foreignObject
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              >
                <img src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png" alt="" />
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
