import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard() {
  return (
    <>
      <div className="profile-card items-center flex gap-6 mt-10">
        <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden">
          <Image src="/profile.jpeg" alt="profile picture" width={96} height={96} className="object-cover w-full h-full" />
        </div>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold">
            Lakshan Perera
          </h1>
          <p>Developer (TypeScript / Linux / Neovim)</p>
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
        <button className="border-2 border-solid py-1.5 pl-4 pr-3 rounded hover:cursor-pointer hover:bg-gray-300">
          Resume<FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
    </>
  )
}

// #319795
