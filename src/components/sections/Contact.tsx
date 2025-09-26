import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="contact mt-10 flex flex-col items-center">
      <p className="text-center">Im mostly active on X and i read my every email, if you want to collaborate to discuss about tech email me :)</p>
      <button className="mt-6 border-2 border-solid py-1.5 pl-4 pr-3 rounded hover:cursor-pointer hover:bg-gray-200">
        Email <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  )
}
