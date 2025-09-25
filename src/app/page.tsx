'use client'

import Image from "next/image";
import Link from "next/link"

import { useState } from "react"

import ThreeCanvas from "./components/ThreeCanvas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeMerge, faCodePullRequest, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter, faBluesky, faMastodon } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-xl font-bold text-th-default">Lakshan Perera</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-primary-brand-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    // Close Icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    // Hamburger Icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Services
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="container mx-auto max-w-2xl px-4">

        <main style={{ height: '500px', width: '500px', margin: '0 auto' }}>
          <ThreeCanvas />
        </main>

        <div className="welcome">
          <p>Hello I&apos;m  Programmer based in Colombo, Sri Lanka 🇱🇰</p>
        </div>

        <div className="my-work">
          <h1 className="font-heading text-2xl font-bold">Open Source Contributions</h1>
          <div className="contributions flex flex-col w-full">

            <a href="https://github.com/TanStack/db/pull/551" target="_blank" className="contribution-card">
              <FontAwesomeIcon icon={faCodePullRequest} />
              <span>Add select option to extract items while preserving metadata (Open)</span>
            </a>

            <a href="https://github.com/nodejs/userland-migrations/pull/166" target="_blank" className="contribution-card">
              <FontAwesomeIcon icon={faCodeMerge} />
              <span>Added support for rmdir imports with aliases</span>
            </a>

            <a href="https://github.com/nodejs/userland-migrations/pull/168" target="_blank" className="contribution-card">
              <FontAwesomeIcon icon={faCodeMerge} />
              <span>Implemented support for detecting member expression require nodes</span>
            </a>

            <a href="https://github.com/colinhacks/zod/pull/4306" target="_blank" className="contribution-card">
              <FontAwesomeIcon icon={faCodeMerge} />
              <span>Added debugging support with tsx runtime</span>
            </a>

            <a href="https://github.com/standard-schema/standard-schema/pull/114" target="_blank" className="contribution-card">
              <FontAwesomeIcon icon={faCodeMerge} />
              <span>Add tanstack DB to the standard schema list (doc)</span>
            </a>
          </div>
        </div>

        <div className="profile-card items-center flex gap-6">
          <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden">
            <Image src="/profile.jpeg" alt="profile picture" width={96} height={96} className="object-cover w-full h-full" />
          </div>
          <div className="flex-grow">
            <h1 className="font-heading text-2xl font-bold">
              Lakshan Perera
            </h1>
            <p>Programmer (TypeScript / Linux / Neovim)</p>
          </div>
        </div>

        <div className="about-section">
          <h2 className="font-heading text-xl font-bold">Heading Here</h2>
          <p>better human being, Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He publishes content for marketing his products and his YouTube channel called Dev as Life has more than 100k subscribers.</p>
        </div>

        <div className="resume">
          <button className="bg-th-default text-white py-2 px-4 rounded hover:bg-blue-500">
            Resume <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>

        <div className="timeline">
          <h1 className="font-heading text-2xl font-bold">Bio / Work History</h1>
          <div>
            <p>2000</p>
            <p>Born in Colombo, Sri Lanka</p>
          </div>
          <div>
            <p>2017 - 2020</p>
            <p>Worked at eDesigners as a wordpress developer</p>
          </div>
          <div>
            <p>2021 - 2024</p>
            <p>Worked at Terias Consulting as a software engineer</p>
          </div>
        </div>

        <div className="hobbies">
          <p>Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning</p>
        </div>

        <div className="socials">
          <h1 className="font-heading text-2xl font-bold">My Socials</h1>
          <ul>
            <li><a href="https://github.com/0xlakshan" target="_blank"><FontAwesomeIcon icon={faGithub} /><span>github</span></a></li>
            <li><a href="https://x.com/tecchirp" target="_blank"><FontAwesomeIcon icon={faXTwitter} /><span>twitter</span></a></li>
            <li><a href="https://bsky.app/profile/0xlakshan.bsky.social" target="_blank"><FontAwesomeIcon icon={faBluesky} /><span>bluesky</span></a></li>
            <li><a href="https://mastodon.social/@lakshan" target="_blank"><FontAwesomeIcon icon={faMastodon} /><span>mastodon</span></a></li>
          </ul>
        </div>

        <div className="contact">
          <p>Im mostly active on X and i read my every email, if you want to collaborate to discuss about tech email me :)</p>
          <button className="bg-th-default text-white py-2 px-4 rounded hover:bg-blue-500">
            Email <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>

        <div className="copyrights">
          <p>© 2025 Lakshan Perera. All Rights Reserved.</p>
        </div>
      </div>


    </div>
  );
}
