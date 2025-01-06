import testPFP from "../assets/testPFP.jpg";
import homeIMG1 from "../assets/homeIMG1.jpg";
import homeIMG2 from "../assets/homeIMG2.jpg";
import { GraduationCap, Cpu, HeartHandshake } from "lucide-react"


const HomeSection = () => {
  return (
    <div id="home" className="flex flex-col border-b border-neutral-700 pb-10 lg:flex-row items-center justify-between scroll-mt-16">
      <div className="lg:w-1/2 p-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">Hi! I'm 
          <span className="font-bold tracking-wider">{" "}Rafael Marco Manubay</span>
        </h1>
        <h2 className="flex items-center pt-3 tracking-wide text-lg sm:text-xl"
        >
          <GraduationCap className="mr-2 text-green-400 flex-shrink-0"/>
          <span className="text-sm">
            Penultimate / 3rd Year 
            <span className="bg-gradient-to-r from-green-200 to-green-600 bg-clip-text text-transparent">
              {" "}
              Software Engineering Student
            </span>
          </span>
        </h2>
        <h2 className="flex items-center pt-3 tracking-wide text-lg sm:text-xl"
        >
          <Cpu className="mr-2 text-blue-300 flex-shrink-0"/>
          <span className="text-sm">
            Experienced with 
            <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Full Stack Development
            </span>
          </span>
        </h2>
        <h2 className="flex items-center pt-3 tracking-wide text-lg sm:text-xl"> 
          <HeartHandshake className="mr-2 text-red-600 flex-shrink-0"/>
          <span className="text-sm bg-gradient-to-r from-red-300 to-red-600 bg-clip-text text-transparent">AUT Student Ambassador</span>
        </h2>
        <h3 className="pt-4 text-lg sm:text-xl">
          I am a passionate 
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">{' '}Software Engineering{' '}</span>
          student with strong 
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">{' '}full-stack web development{' '}</span>
          experience. I enjoy building innovative projects and continuously learning to improve my skills!
        </h3>
      </div>

      <div className="lg:w-1/2 mt-10 w-full sm:w-1/2 p-4 flex justify-center">
        <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden">
          <img 
            src={homeIMG2} 
            alt="profilePhoto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeSection