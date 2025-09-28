import Image from "next/image";
import ThemeButton from "../layout/ui/ThemeButton";

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
        <p>I&apos;m a developer who enjoys building tools and products that are useful & feel great to use. I&apos;m pretty fluent in TypeScript and spend a lot of my time contributing to open source and experimenting with react based frameworks.</p>
        <br />
        <p>Lately, I&apos;ve been diving into libraries like React Query and TanStack DB to get a deeper sense of how they work under the hood. I&apos;m also really interested in exploring the internals of JavaScript things like how engines run code, how ASTs are structured, and what makes the language tick at a lower level.</p>
        <br />
        <p>I really enjoy the open source work I do whether it&apos;s fixing tricky bugs, improving the overall experience, or just helping a project move forward in small but meaningful ways</p>
      </div>
      <ThemeButton text="Resume" href="#" external={true} />
    </>
  )
}
