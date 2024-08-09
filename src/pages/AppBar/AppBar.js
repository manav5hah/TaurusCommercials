import * as React from 'react'
import {
  Link,
} from "react-router-dom";

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid'

import logo from "./logo.png"

const products = [
  { name: 'Cold Rolled Coil/Sheets', to: '/cr-sheets' },
  { name: 'Hot Rolled Coil/Sheets', to: '/hr-sheets' }]
const callsToAction = [
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function AppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="bg-white">
      <nav className='mx-auto 2xl:flex xl:flex lg:flex hidden max-w-7l items-center justify-center p-3 lg:px-8'>
        <div className='mx-2'>
          <a href="tel:+918758588781" className="flex lg:flex text-sm font-semibold leading-6 text-gray-900">
            <PhoneIcon className="text-444444-400 h-auto w-5 mx-2" />
            <a href="tel:+919824048871" className="mx-1 text-sm font-semibold leading-6 text-gray-900">
              +91-9824048871
            </a>
            <a href="tel:+918758588781" className="mx-1 text-sm font-semibold leading-6 text-gray-900">
              +91-8758588781
            </a>
          </a>
        </div>
        <div className='mx-2'>
          <a href="mailto:kamaliashreyas@gmail.com" className="flex lg:flex text-sm font-semibold leading-6 text-gray-900">
            <EnvelopeIcon className="text-444444-400 h-auto w-5 mx-2" />
            <a href="mailto:sunil@kamalia.in" className="mx-1 text-sm font-semibold leading-6 text-gray-900">
              sunil@kamalia.in
            </a>
            <a href="mailto:kamaliashreyas@gmail.com" className="mx-1 text-sm font-semibold leading-6 text-gray-900">
              kamaliashreyas@gmail.com
            </a>
          </a>
        </div>
      </nav>
      <hr className='2xl:flex xl:flex lg:flex hidden ' />
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tauras Commercials Pvt Ltd</span>
            <img className="w-36" src={logo} alt="Tauras Commercials Pvt Ltd" />
            Commercials Pvt Ltd
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div> */}
                      <div className="flex-auto">
                        <Link to={item.to} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      {/* <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" /> */}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link to='/about-us' className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </Link>
          <Link to='/contact-us' className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </Link>
          <Link to='/enquiry' className="text-sm font-semibold leading-6 text-gray-900">
            Enquiry
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Taurus commercials Pvt Ltd</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
              Commercials Pvt Ltd
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as={Link}
                            to={item.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
                <Link
                  to="/enquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Enquiry
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );

}
export default AppBar; 