import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeMerge, faCodePullRequest, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Contribution = {
  href: string,
  icon: IconDefinition,
  title: string,
  isMerged: boolean
}

const contributions: Array<Contribution> = [
  {
    href: "https://github.com/TanStack/db/pull/551",
    icon: faCodePullRequest,
    title: "Add select option to extract items while preserving metadata (Open)",
    isMerged: false
  },
  {
    href: "https://github.com/nodejs/userland-migrations/pull/166",
    icon: faCodeMerge,
    title: "Added support for rmdir imports with aliases",
    isMerged: true
  },
  {
    href: "https://github.com/nodejs/userland-migrations/pull/168",
    icon: faCodeMerge,
    title: "Implemented support for detecting member expression require nodes",
    isMerged: true
  },
  {
    href: "https://github.com/colinhacks/zod/pull/4306",
    icon: faCodeMerge,
    title: "Added debugging support with tsx runtime",
    isMerged: true
  },
  {
    href: "https://github.com/standard-schema/standard-schema/pull/114",
    icon: faCodeMerge,
    title: "Add tanstack DB to the standard schema list (doc)",
    isMerged: true
  },
]

export default function Contributions() {
  return (
    <div className="my-work mt-10">
      <h1 className="text-2xl font-bold">Open Source Contributions</h1>
      <div className="contributions flex flex-col w-full gap-4 mt-7">
        {contributions.map((item, index) => (
          <a key={index} href={item.href} target="_blank" className={`contribution-card border-2 border-solid rounded-sm p-2 text-base font-bold transition-colors duration-300 ${item.isMerged ? 'text-purple-600 hover:bg-purple-100' : 'text-green-600 hover:bg-green-100'}`}>
            <FontAwesomeIcon className="pl-1" icon={item.icon} />
            <span className="ml-2">{item.title}</span>
          </a>
        ))}
      </div>
    </div>

  )
}
