import { HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../lib/utils";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-white ">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 shadow-b">
        <div className="relative flex justify-between h-16">
          <div className="flex-1 flex items-center justify-start">
            <Link href="/">
              <a className="pb-2 hover:border-primary-800 border-transparent border-b-2 hover:text-gray-900 text-gray-800 inline-flex items-center px-1 pt-1 text-xs font-medium">
                <HomeIcon className="w-6 h-6" />
              </a>
            </Link>
          </div>

          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="sm:ml-6 flex sm:space-x-8">
              <Link href="/blog">
                <a
                  className={classNames(
                    router.pathname == "/blog"
                      ? "text-gray-800 font-bold border-primary-400"
                      : "text-gray-500 font-medium",
                    "pb-2 uppercase border-transparent  hover:border-primary-800 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-xs"
                  )}
                >
                  Blog
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={classNames(
                    router.pathname == "/about"
                      ? "text-gray-800 font-bold border-primary-400"
                      : "text-gray-500 font-medium",
                    "pb-2 uppercase border-transparent  hover:border-primary-800 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-xs"
                  )}
                >
                  About
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
