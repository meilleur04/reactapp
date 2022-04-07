/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Products', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
]

export default function HeadPage() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              </nav>
            </div>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block sm:0 xl:inline">JAGGI</span>{' '}
                <span className="block xl:px-16 text-indigo-600 xl:inline">INDUSTRIES</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Manufacturer, Exporter & Supplier of All kinds of Submersible Pumps, Self Priming Monoblock Pumps, Super Suction Pumps, Shallow Well Pumps & Electric Motors.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="#"
                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-full flex content-centre justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://static8.depositphotos.com/1000291/1005/i/600/depositphotos_10054154-stock-photo-laser-cutting-of-metal-sheet.jpg"
          alt=""
        />
      </div>
    </div>
  )
}