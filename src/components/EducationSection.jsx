import { education } from "../constants"
import { GraduationCap, BookCheck, HeartHandshake } from "lucide-react"

const EducationSection = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-2/3 mt-16 px-6 mx-auto">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center">
                Education
            </h2>
        </div>
        <div className="border border-neutral-700 rounded-lg p-6 mt-10 hover:bg-neutral-800 transition-colors">
            <div className="flex justify-between items-center font-semibold">
                <h3 className="text-xl">{education.programme}</h3>
                <span className="flex"><GraduationCap className="mr-3"/>{education.graduation}</span>
            </div>
            <div>
                <p className="mt-1 text-neutral-500">
                    {education.university}
                </p>
            </div>
            <ul className="text-md flex flex-col items-center mt-5 space-y-3">
                <li className="flex">
                    <BookCheck className="mr-3 text-blue-500"/>
                    <span>{education.major}</span>
                </li>
                <li className="flex">
                    <BookCheck className="mr-3 text-blue-500"/>
                    <span>{education.year}</span>
                </li>
                <li className="flex">
                    <BookCheck className="mr-3 text-green-500"/>
                    <span className="text-xl bg-gradient-to-r from-green-200 to-green-600 text-transparent bg-clip-text">{education.gpa}</span>
                </li>
            </ul>
            <div className="mt-6 border-t ">
                <div className="flex items-center justify-center mt-10">
                    <HeartHandshake className="w-10 h-10 mr-2 text-red-400"/>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r">2025 AUT Student Ambassador</h3>
                    <HeartHandshake className="w-10 h-10 ml-2 text-red-400"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EducationSection