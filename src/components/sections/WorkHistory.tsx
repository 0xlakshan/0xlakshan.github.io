export default function WorkHistory() {
  return (
    <div className="timeline mt-10">
      <h1 className="text-2xl font-bold">Bio / Work History</h1>
      <div className="mt-6 flex flex-col gap-4">
        <div>
          <p className="font-bold">2000</p>
          <p>Born in Colombo, Sri Lanka</p>
        </div>
        <div>
          <p className="font-bold">2016</p>
          <p>Taught myself how to code</p>
        </div>
        <div>
          <p className="font-bold">2017 - 2020</p>
          <p>Worked at <a className="underline decoration-soild" target="_blank" href="https://www.linkedin.com/company/edesigners-pvt-ltd">eDesigners</a> as a wordpress developer</p>
        </div>
        <div>
          <p className="font-bold">2021 - 2024</p>
          <p>Worked at <a className="underline decoration-soild" target="_blank" href="https://www.linkedin.com/company/terias-consulting-ltd-/">Terias Consulting</a> as a software engineer</p>
        </div>
        <div>
          <p className="font-bold">2025 - Present</p>
          <p>Independent Open Source Maintainer/Contributor ☕</p>
        </div>
      </div>
    </div>
  )
}
