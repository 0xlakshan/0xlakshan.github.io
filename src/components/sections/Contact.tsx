import ThemeButton from "../layout/ui/ThemeButton";

export default function Contact() {
  return (
    <div className="contact mt-10 flex flex-col items-center">
      <p className="text-center">I hang out mostly on X (twitter), and I always read my emails. If you ever want to collaborate or just geek out about tech, feel free to reach out :)</p>
      <ThemeButton text="Email" href="mailto:lakshanperera.dev@gmail.com" external={true} />
    </div>
  )
}
