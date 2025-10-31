import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

type ThemeProps = {
  text: string,
  href: string,
  external?: boolean
}

export default function ThemeButton({
  text,
  href,
  external
}: ThemeProps) {

  const router = useRouter();

  const handleClick = () => {
    if (external) {
      window.open(href, '_blank', 'noopener noreferrer');
    } else {
      router.push(href);
    }
  }

  return (
    <div className="resume flex justify-center mt-10">
      <button onClick={handleClick} className="bg-[#319795] border-[#319795] text-white border-2 border-solid py-1.5 pl-4 pr-3 rounded hover:cursor-pointer">
        {text} <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  )
}
