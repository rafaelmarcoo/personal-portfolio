import { CircleDot } from "lucide-react"
import { experiences } from "../constants"

const ExperienceSection = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-2/3 mt-16 px-6 mx-auto">
        <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl text-center tracking-wide mb-10">
                Experience
            </h2>
        </div>
        <div className="border border-neutral-700 rounded-lg divide-y divide-neutral-700">
            {experiences.map((experience, index) => (
                <div key={index} className="p-6 hover:bg-neutral-800 transition-colors">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <span className="text-sm sm:text-base text-neutral-400">{experience.date}</span>
                    </div>
                    <p className="mt-1 text-neutral-500">{experience.company}</p>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                        {experience.description.map((description, index) => (
                            <li key={index} className="flex items-start">
                                <CircleDot className="w-3 text-blue-500"/>
                                <span className="py-0.5 ml-3">{description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExperienceSection