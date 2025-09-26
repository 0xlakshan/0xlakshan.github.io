import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="bg-theme-yellow/50 shadow-md sticky top-0 z-50 backdrop-filter backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-xl font-bold">Lakshan Perera</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <a className="flex px-1 py-1.5 border-2 border-solid rounded-sm justify-center" href="https://github.com/0xlakshan/portfolio" target="_blank">
              <FontAwesomeIcon className="self-center" icon={faGithub} />
              <p className="pl-1.5">Source</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
