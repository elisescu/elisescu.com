import { HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { classNames } from '../lib/utils'

export const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="">
      <div className="shadow-b">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 items-center justify-start">
            <Link
              href="/"
              className="inline-flex items-center border-b-2 border-transparent pb-2 pt-1 text-xs font-medium text-gray-800 hover:border-primary-800 hover:text-gray-900"
            >
              <HomeIcon className="h-6 w-6" />
            </Link>
          </div>

          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex sm:ml-6 sm:space-x-8">
              <Link
                href="/thoughts"
                className={classNames(
                  router.pathname == '/blog'
                    ? 'border-primary-400 font-bold text-gray-800'
                    : 'font-medium text-gray-500',
                  'inline-flex items-center border-b-2  border-transparent px-1 pb-2 pt-1 text-xs uppercase hover:border-primary-800 hover:text-gray-900'
                )}
              >
                Thoughts
              </Link>
              {/* <Link
                href="/about"
                className={classNames(
                  router.pathname == "/about"
                    ? "text-gray-800 font-bold border-primary-400"
                    : "text-gray-500 font-medium",
                  "pb-2 uppercase border-transparent  hover:border-primary-800 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-xs"
                )}
              >
                About
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
