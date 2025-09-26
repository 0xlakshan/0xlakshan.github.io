import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faBluesky, faMastodon } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="socials mt-10">
      <h1 className="text-2xl font-bold">My Socials</h1>
      <ul className="mt-6 flex flex-col gap-2">
        <li><a href="https://github.com/0xlakshan" target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={faGithub} /><span className="ml-2">@github</span></a></li>
        <li><a href="https://x.com/tecchirp" target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={faXTwitter} /><span className="ml-2">@twitter</span></a></li>
        <li><a href="https://bsky.app/profile/0xlakshan.bsky.social" target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={faBluesky} /><span className="ml-2">@bluesky</span></a></li>
        <li><a href="https://mastodon.social/@lakshan" target="_blank" className="underline decoration-soild"><FontAwesomeIcon icon={faMastodon} /><span className="ml-2">@mastodon</span></a></li>
      </ul>
    </div>
  )
}
