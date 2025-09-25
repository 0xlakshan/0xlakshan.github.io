'use client'

import Image from "next/image";
import Link from "next/link"

import { useState } from "react"

import ThreeCanvas from "./components/ThreeCanvas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeMerge, faCodePullRequest, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter, faBluesky, faMastodon } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="bg-[#f0e7db]">
      <nav className="bg-[#f0e7db]/50 shadow-md sticky top-0 z-50 backdrop-filter backdrop-blur-md">
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

      <div className="container mx-auto max-w-2xl px-4">
        <main className="w-full max-w-[500px] mx-auto aspect-square">
          <ThreeCanvas />
        </main>

        <div className="welcome text-center mt-6">
          <p>Hi 👋 I&apos;m  Programmer based in Colombo, Sri Lanka 🇱🇰</p>
        </div>

        <div className="my-work mt-10">
          <h1 className="text-2xl font-bold">Open Source Contributions</h1>
          <div className="contributions flex flex-col w-full gap-4 mt-7">

            <a href="https://github.com/TanStack/db/pull/551" target="_blank" className="contribution-card border-2 border-solid rounded-sm p-2 text-base font-bold transition-colors duration-300 text-green-600 hover:bg-green-100">
              <FontAwesomeIcon className="pl-1" icon={faCodePullRequest} />
              <span className="ml-2">Add select option to extract items while preserving metadata (Open)</span>
            </a>

            <a href="https://github.com/nodejs/userland-migrations/pull/166" target="_blank" className="contribution-card border-2 border-solid rounded-sm p-2 text-base font-bold transition-colors duration-300 text-purple-600 hover:bg-purple-100">
              <FontAwesomeIcon icon={faCodeMerge} />
              <span className="ml-2">Added support for rmdir imports with aliases</span>
            </a>

            <a href="https://github.com/nodejs/userland-migrations/pull/168" target="_blank" className="contribution-card border-2 border-solid rounded-sm p-2 text-base font-bold transition-colors duration-300 text-purple-600 hover:bg-purple-100">
              <FontAwesomeIcon icon={faCodeMerge} />
              <span className="ml-2">Implemented support for detecting member expression require nodes</span>
            </a>

            <a href="https://github.com/colinhacks/zod/pull/4306" target="_blank" className="contribution-card border-2 border-solid rounded-sm p-2 text-base font-bold transition-colors duration-300 text-purple-600 hover:bg-purple-100">
              <FontAwesomeIcon icon={faCodeMerge} />
              <span className="ml-2">Added debugging support with tsx runtime</span>
            </a>

            <a href="https://github.com/standard-schema/standard-schema/pull/114" target="_blank" className="contribution-card border-2 border-solid rounded-sm p-2 text-base font-bold transition-colors duration-300 text-purple-600 hover:bg-purple-100">
              <FontAwesomeIcon icon={faCodeMerge} />
              <span className="ml-2">Add tanstack DB to the standard schema list (doc)</span>
            </a>
          </div>
        </div>

        <div className="profile-card items-center flex gap-6 mt-10">
          <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden">
            <Image src="/profile.jpeg" alt="profile picture" width={96} height={96} className="object-cover w-full h-full" />
          </div>
          <div className="flex-grow">
            <h1 className="text-2xl font-bold">
              Lakshan Perera
            </h1>
            <p>Programmer (TypeScript / Linux / Neovim)</p>
          </div>
        </div>

        <div className="about-section mt-7">
          <p>I&apos;m a developer who loves building tools and products that are clean, efficient, and just feel nice to use. I’m fluent in TypeScript and prioritize writing maintainable, scalable code</p>
          <br />
          <p>I use Ubuntu as my main os, and Neovim as my editor. I’ve really enjoyed diving into the Neovim ecosystem, concepts like Tree sitter and DAP have given me a new appreciation for modern dev tools/IDEs and how they all work together. Lately, I’ve been working on my own dotfiles and config tooling (inspired by Omarchy) to make my setup more portable and better suited to how I work.</p>
          <br />
          <p>I&apos;ve recently started diving into React libraries like React Query/Tanstack DB to better understand how they work under the hood, and I’m planning to contribute as I come across interesting issues</p>
        </div>

        <div className="resume flex justify-center mt-10">
          <button className="border-2 border-solid py-1.5 pl-4 pr-3 rounded hover:cursor-pointer hover:bg-gray-200">
            Resume <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>

        <div className="timeline mt-10">
          <h1 className="text-2xl font-bold">Bio / Work History</h1>
          <div className="mt-6 flex flex-col gap-4">
            <div>
              <p className="font-bold">2000</p>
              <p>Born in Colombo, Sri Lanka</p>
            </div>
            <div>
              <p className="font-bold">2017 - 2020</p>
              <p>Worked at <a className="underline decoration-soild" target="_blank" href="https://www.linkedin.com/company/edesigners-pvt-ltd">eDesigners</a> as a wordpress developer</p>
            </div>
            <div>
              <p className="font-bold">2021 - 2024</p>
              <p>Worked at <a className="underline decoration-soild" target="_blank" href="https://www.linkedin.com/company/terias-consulting-ltd-/">Terias Consulting</a> as a software engineer</p>
            </div>
          </div>
        </div>

        <div className="hobbies mt-10">
          <p className="text-center">Music, Thinkering with models & Machine Learning</p>
        </div>

        <div className="socials mt-10">
          <h1 className="text-2xl font-bold">My Socials</h1>
          <ul className="mt-6 flex flex-col gap-2">
            <li><a href="https://github.com/0xlakshan" target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={faGithub} /><span className="ml-2">@github</span></a></li>
            <li><a href="https://x.com/tecchirp" target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={faXTwitter} /><span className="ml-2">@twitter</span></a></li>
            <li><a href="https://bsky.app/profile/0xlakshan.bsky.social" target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={faBluesky} /><span className="ml-2">@bluesky</span></a></li>
            <li><a href="https://mastodon.social/@lakshan" target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={faMastodon} /><span className="ml-2">@mastodon</span></a></li>
          </ul>
        </div>

        <div className="contact mt-10 flex flex-col items-center">
          <p className="text-center">Im mostly active on X and i read my every email, if you want to collaborate to discuss about tech email me :)</p>
          <button className="mt-6 border-2 border-solid py-1.5 pl-4 pr-3 rounded hover:cursor-pointer hover:bg-gray-200">
            Email <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>

        <div className="copyrights mt-10 text-center">
          <p>© 2025 Lakshan Perera. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
