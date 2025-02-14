import { Dumbbell, Guitar, Coffee, CircleCheck, NotebookPen } from "lucide-react";
import { hobbies } from "../constants";
import { techStack, programmingLanguages, databases } from "../constants";
import gym from "../assets/gym.jpg";
import barista from "../assets/barista.jpg";
import guitar from "../assets/guitar.jpg";
import az900 from "../assets/az900.png";
import az104 from "../assets/az104.png";

const AboutSection = () => {
  return (
    <div id="about" className="mt-16 px-6 scroll-mt-20">
        <div className="px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
                About me!
            </h2>
            <h3 className="text-center pt-4 text-lg sm:text-xl p-5 max-w-3xl mx-auto">
                I am hardworking, team-oriented, and possess strong communication skills. I thrive under pressure and always manage to have fun while working on challenging tasks!
            </h3>
            <div className="border-t border-neutral-700 mt-10 pt-6">
                <div className="gap-6">
                    <img 
                        src={az104}
                        className="w-32 sm:w-40 md:w-48 hover:scale-105 transition-transform mx-auto"
                    />
                    <h2 className="text-xl sm:text-2xl flex items-center flex-wrap justify-center text-center md:text-left">
                        Currently pursuing the&nbsp; 
                        <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
                            AZ-104 Azure Administrator Associate!
                        </span>
                        <a 
                            className="lg:ml-3 mt-3 sm:mt-0 px-3 py-2 border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 text-white text-sm sm:text-base font-semibold transition hover:scale-105"
                        >
                            Coming Soon
                        </a>
                    </h2>
                </div>
                <div className="gap-6 mt-8">
                    <img 
                        src={az900}
                        className="w-32 sm:w-40 md:w-48 hover:scale-105 transition-transform mx-auto"
                    />
                    <h2 className="text-xl sm:text-2xl flex flex-wrap items-center justify-center text-center md:text-left">
                        Successfully earned the&nbsp;
                        <span className="bg-gradient-to-r from-green-300 to-green-600 bg-clip-text text-transparent">
                            AZ-900 Azure Fundamentals Certification!
                        </span>
                        <a 
                            href="https://learn.microsoft.com/api/credentials/share/en-us/RafaelMarcoManubay-8717/8485735ED3E6899F?sharingId=2BC03C20EE2E8C13"
                            target="_blank"
                            className="lg:ml-3 mt-3 sm:mt-0 px-3 py-2 border border-neutral-700 rounded-md bg-gradient-to-r from-green-300 to-green-600 text-white text-sm sm:text-base font-semibold transition hover:scale-105"
                        >
                            View Certificate
                        </a>
                    </h2>
                </div>
            </div>
        </div>
        <div className="flex flex-col mb-10 mt-10">
            <div className="border-t border-neutral-700 ">
                <h3 className="text-center pt-4 text-lg sm:text-xl p-5">Main Tech Stack</h3>
                <div className="flex gap-y-4 space-x-5 justify-center pb-3 ">
                    {techStack.map((url, index) => (
                        <img src={url} 
                            alt="logo"
                            className="w-16 transition-transform hover:scale-110" 
                        />
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-center pt-4 text-lg sm:text-xl p-5">Languages</h3>
                <div className="flex flex-wrap space-x-5 justify-center gap-x-5 gap-y-4 pb-3">
                    {programmingLanguages.map((url, index) => (
                        <img src={url} 
                            alt="logo"
                            className="w-16 transition-transform hover:scale-110" 
                        />
                    ))}
                </div>
            </div>
            <div className="border-b border-neutral-700">
                <h3 className="text-center pt-4 text-lg sm:text-xl p-5">Databases</h3>
                <div className="flex gap-x-5 gap-y-4 justify-center pb-3">
                    {databases.map((url, index) => (
                        <img src={url} 
                            alt="logo"
                            className="w-16 transition-transform hover:scale-110" 
                        />
                    ))}
                </div>
            </div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center p-5">
                Other than programming, I am a:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-neutral-700">
            {hobbies.map((hobby, index) => (
                <div key={index} className="p-6 border border-neutral-700 rounded-lg shadow-lg bg-neutral-800 mb-16 hover:scale-105 transition-transform">
                        <div className="flex items-center mb-4">
                            {hobby.title === "Waiter / Barista" && <Coffee />}
                            {hobby.title === "Musician - Guitarist" && <Guitar />}
                            {hobby.title === "Fitness Enthusiast" && <Dumbbell />}
                            <span className="ml-3 mt-2 mb-2 text-xl font-semibold">{hobby.title}</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-md text-neutral-400 flex-grow">
                                {hobby.description}
                            </p>
                            {hobby.title === "Waiter / Barista" && <img 
                                src={barista} 
                                alt="barista"
                                className="w-36 h-36 p-3 rounded-full object-cover"
                            />}
                            {hobby.title === "Musician - Guitarist" && <img 
                                src={guitar} 
                                alt="barista"
                                className="w-36 h-36 p-3 rounded-full object-cover"
                            />}
                            {hobby.title === "Fitness Enthusiast" && <img 
                                src={gym} 
                                alt="barista"
                                className="w-36 h-36 p-3 rounded-full object-cover"
                            />}
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AboutSection