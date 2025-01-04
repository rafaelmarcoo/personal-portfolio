import { CircleDot } from "lucide-react"
import { experiences } from "../constants"

const ExperienceSection = () => {
  return (
    <div className="mt-16 px-6 sm:px-6mx-auto">
        <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
                Experience
            </h2>
        </div>
        <div className="border border-neutral-700 mt-6 rounded-lg">
            {experiences.map((experience, index) => (
                <div className="flex p-5">
                    <CircleDot className="mr-3 w-5"/>
                    <span className="text-xl">{experience.title}</span>
                    <span className="items-end">{experience.date}</span>
                </div>
            ))}

        </div>
    </div>
  )
}

export default ExperienceSection