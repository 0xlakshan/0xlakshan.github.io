import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeMerge, faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type Contribution = {
  href: string,
  title: string,
  repoIcon: string,
  isMerged: boolean
  additions: number,
  deletions: number
}

const contributions: Array<Contribution> = [
  {
    href: "https://github.com/vercel/ai/pull/9437",
    title: "Introduced Embedding Model middleware",
    repoIcon: "https://avatars.githubusercontent.com/u/14985020?s=48&v=4",
    isMerged: true,
    additions: 794,
    deletions: 59
  },
  {
    href: "https://github.com/ChromeDevTools/chrome-devtools-mcp/pull/729",
    title: "Allow opting out of default Chrome launch arguments",
    repoIcon: "https://avatars.githubusercontent.com/u/11260967?s=48&v=4",
    isMerged: true,
    additions: 52,
    deletions: 6
  },
  {
    href: "https://github.com/ChromeDevTools/chrome-devtools-mcp/pull/748",
    title: "support resize_page when browser window is maximized",
    repoIcon: "https://avatars.githubusercontent.com/u/11260967?s=48&v=4",
    isMerged: true,
    additions: 145,
    deletions: 1
  },
  {
    href: "https://github.com/TanStack/db/pull/551",
    title: "Add select option to extract items while preserving metadata",
    repoIcon: "https://avatars.githubusercontent.com/u/72518640?s=48&v=4",
    isMerged: true,
    additions: 317,
    deletions: 16
  },
  {
    href: "https://github.com/nodejs/userland-migrations/pull/166",
    title: "Added support for rmdir imports with aliases",
    repoIcon: "https://avatars.githubusercontent.com/u/9950313?s=48&v=4",
    isMerged: true,
    additions: 169,
    deletions: 3
  },
  {
    href: "https://github.com/nodejs/userland-migrations/pull/168",
    title: "Support for detecting member expression require nodes",
    repoIcon: "https://avatars.githubusercontent.com/u/9950313?s=48&v=4",
    isMerged: true,
    additions: 53,
    deletions: 14
  },
  {
    href: "https://github.com/colinhacks/zod/pull/4306",
    title: "Added debugging support with tsx runtime",
    repoIcon: "https://avatars.githubusercontent.com/u/3084745?s=48&v=4",
    isMerged: true,
    additions: 171,
    deletions: 15
  },
  {
    href: "https://github.com/codemod/codemod/pull/1895",
    title: "Next.js update for CVE-2025-67779",
    repoIcon: "https://avatars.githubusercontent.com/u/78830094?s=48&v=4",
    isMerged: true,
    additions: 66,
    deletions: 71
  },
  {
    href: "https://github.com/standard-schema/standard-schema/pull/114",
    title: "Docs: Add tanstack DB to the standard schema list",
    repoIcon: "https://avatars.githubusercontent.com/u/166350654?s=48&v=4",
    isMerged: true,
    additions: 1,
    deletions: 0
  },
  {
    href: "https://github.com/google-gemini/gemini-cli/pull/11599",
    title: "Docs: Update project structure section with missing packages",
    repoIcon: "https://avatars.githubusercontent.com/u/161781182?s=48&v=4",
    isMerged: true,
    additions: 5,
    deletions: 0
  },
  {
    href: "https://github.com/vercel/ai/pull/10232",
    title: "Migrate from unsupported Gemini models",
    repoIcon: "https://avatars.githubusercontent.com/u/14985020?s=48&v=4",
    isMerged: false,
    additions: 723,
    deletions: 439
  },
  {
    href: "https://github.com/google-gemini/gemini-cli/pull/12722",
    title: "Hide startup tips until folder trust dialog is resolved",
    repoIcon: "https://avatars.githubusercontent.com/u/161781182?s=48&v=4",
    isMerged: false,
    additions: 8,
    deletions: 6
  },
  {
    href: "https://github.com/google-gemini/gemini-cli/pull/12637",
    title: " Safeguard embedded shell exit flow with Ctrl-C confirmation",
    repoIcon: "https://avatars.githubusercontent.com/u/161781182?s=48&v=4",
    isMerged: false,
    additions: 186,
    deletions: 2
  },
];

export default function Contributions() {
  return (
    <div className="my-work mt-10">
      <h1 className="text-2xl font-bold">Open Source Contributions</h1>
      <div className="contributions flex flex-col w-full gap-4 mt-7">
        {contributions.map((item, index) => (
          <a key={index} href={item.href} target="_blank" className={`flex justify-between contribution-card border-2 border-solid rounded-sm p-2 text-base font-bold transition-colors duration-300 text-gray-800 hover:bg-[#31979514] ${item.isMerged === false ? 'opacity-50' : ''}`}>
            <div className="flex">
              {item.isMerged ? <FontAwesomeIcon className="pl-1 m-auto" icon={faCodeMerge} /> : <FontAwesomeIcon className="pl-1 m-auto" icon={faCodePullRequest} />}
              <div className="hidden md:block m-auto">
                <Image
                  src={item.repoIcon}
                  width={22}
                  height={22}
                  alt="pr icon"
                  className="ml-2 rounded-full"
                />
              </div>
              <span className="ml-2">{item.title}</span>
            </div>
            <div className="text-xs text-right font-bold leading-tight self-end">
              <span className="text-[#18783e]">+{item.additions}</span>{'  '}
              <span className="text-[#cf222e]">-{item.deletions}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
