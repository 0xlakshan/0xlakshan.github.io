import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faBluesky, faMastodon, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";

type Social = {
  href: string,
  icon: IconDefinition,
  socialName: string
}

const socials: Array<Social> = [
  {
    href: "https://github.com/0xlakshan",
    icon: faGithub,
    socialName: "github"
  },
  {
    href: "https://x.com/tecchirp",
    icon: faXTwitter,
    socialName: "twitter"
  },
  {
    href: "https://bsky.app/profile/0xlakshan.bsky.social",
    icon: faBluesky,
    socialName: "bluesky"
  },
  {
    href: "https://mastodon.social/@lakshan",
    icon: faMastodon,
    socialName: "mastodon"
  },
  {
    href: "https://www.linkedin.com/in/lakshan-developer/",
    icon: faLinkedin,
    socialName: "linkedin"
  }
]

export default function Socials() {
  return (
    <div className="socials mt-10">
      <h1 className="text-2xl font-bold">My Socials</h1>
      <ul className="mt-6 flex flex-col gap-2">
        {socials.map((item, index) => (
          <li key={index}><a href={item.href} target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={item.icon} /><span className="ml-2">@{item.socialName}</span></a></li>
        ))}
      </ul>
    </div>
  )
}
