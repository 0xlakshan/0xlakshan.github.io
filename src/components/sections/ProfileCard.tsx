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
        <p>I&apos;m pretty fluent in TypeScript and spend a lot of my time contributing to open source and experimenting with react based frameworks.</p>
        <br />
        <p>I&apos;ve been diving into React libraries to get a deeper sense of how they work under the hood. I&apos;m also really interested in exploring the internals of JavaScript things like how engines run code, how ASTs are structured.</p>
        <br />
        <p>I currently spend most of my time building and contributing to open source AI Projects, mainly focused on improving the developer experience around AI and My personal projects explore areas that haven&apos;t really been solved yet and aim to push the dev experience forward in meaningful ways.</p>
        <br />
        <p>Open source work is something i genuinely enjoy whether it&apos;s fixing tricky issues, adding new features or helping a project move forward through meaningful & steady contributions.</p>
      </div>
      <ThemeButton text="Resume" href="https://drive.google.com/file/d/1iuDpiT2VnEAgKbTVobBNt7D-qdnXytyB/view" external={true} />
    </>
  )
}
