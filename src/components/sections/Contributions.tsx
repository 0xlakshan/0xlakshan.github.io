import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeMerge, faCodePullRequest } from "@fortawesome/free-solid-svg-icons";

type Contribution = {
  href: string,
  title: string,
  isMerged: boolean
  additions: number,
  deletions: number
}

const contributions: Array<Contribution> = [
  {
    href: "https://github.com/vercel/ai/pull/9437",
    title: "Introduced Embedding Model middleware",
    isMerged: true,
    additions: 794,
    deletions: 59
  },
  {
    href: "https://github.com/TanStack/db/pull/551",
    title: "Add select option to extract items while preserving metadata",
    isMerged: true,
    additions: 317,
    deletions: 16
  },
  {
    href: "https://github.com/nodejs/userland-migrations/pull/166",
    title: "Added support for rmdir imports with aliases",
    isMerged: true,
    additions: 169,
    deletions: 3
  },
  {
    href: "https://github.com/nodejs/userland-migrations/pull/168",
    title: "Implemented support for detecting member expression require nodes",
    isMerged: true,
    additions: 53,
    deletions: 14
  },
  {
    href: "https://github.com/colinhacks/zod/pull/4306",
    title: "Added debugging support with tsx runtime",
    isMerged: true,
    additions: 171,
    deletions: 15
  },
  {
    href: "https://github.com/standard-schema/standard-schema/pull/114",
    title: "Docs: Add tanstack DB to the standard schema list",
    isMerged: true,
    additions: 1,
    deletions: 0
  },
  {
    href: "https://github.com/google-gemini/gemini-cli/pull/11599",
    title: "Docs: Update project structure section with missing packages",
    isMerged: true,
    additions: 5,
    deletions: 0
  },
];

export default function Contributions() {
  return (
    <div className="my-work mt-10">
      <h1 className="text-2xl font-bold">Open Source Contributions</h1>
      <div className="contributions flex flex-col w-full gap-4 mt-7">
        {contributions.map((item, index) => (
          <a key={index} href={item.href} target="_blank" className={`flex justify-between contribution-card border-2 border-solid rounded-sm p-2 text-base font-bold transition-colors duration-300 ${item.isMerged ? 'text-gray-800 hover:bg-gray-200' : 'text-gray-800 hover:bg-gray-200'}`}>
            <div>
              {item.isMerged ? <FontAwesomeIcon className="pl-1" icon={faCodeMerge} /> : <FontAwesomeIcon className="pl-1" icon={faCodePullRequest} />}
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
