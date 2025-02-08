import { projects } from "../constants"
import { Eye, CircleDot } from "lucide-react"

const ProjectsSection = () => {
  return (
    <div id="projects" className="mt-16 px-6 sm:px-6mx-auto scroll-mt-20">
        <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
                Projects
            </h2>
            <h3 className="text-center text-lg sm:text-xl p-5">
                Below are projects I have proudly made/currently making!
            </h3>
            {projects.map((project, index) => (
                <div key={index} className="border border-neutral-700 rounded-lg mb-5 bg-neutral-800">
                    <div>
                        <h3 className="text-center text-2xl sm:text-3xl p-5">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap p-4 overflow-hidden gap-x-5 gap-y-4 justify-center">
                            {project.technology.map((technology, index) => (
                                <img 
                                    src={technology} 
                                    alt="logo"
                                    className="w-12 mb-2 object-contain" 
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <h3 className="text-center pt-2 ml-3 mr-3 text-lg sm:text-xl">
                                {project.description}
                            </h3>
                            {project.title === "InvoicePro" && (
                                <div className="flex flex-wrap lg:flex-row justify-center mt-10 gap-x-5 mb-10 gap-y-4">
                                    <a 
                                        href={project.sourceCode[0]} 
                                        target="_blank"
                                        className="flex items-center border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 p-2"
                                    >
                                        <img 
                                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
                                            className="w-10 mr-3"
                                        /> 
                                        Github - Front End
                                    </a>
                                    <a 
                                        href={project.sourceCode[1]} 
                                        target="_blank" 
                                        className="flex items-center border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 p-2"
                                    >
                                        <img 
                                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
                                            className="w-10 mr-3"
                                        /> 
                                        Github - Back End
                                    </a>
                                    <a 
                                        href="#" 
                                        className="flex items-center py-2 px-3 border border-neutral-700 p-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-600"
                                    >
                                        <Eye className="mr-3"/>
                                        View Live
                                    </a>
                                </div>
                            )}
                            {project.title === "VR Landing Page" && (
                                <div className="flex flex-wrap justify-center mt-10 gap-x-5 mb-10 gap-y-4">
                                    <a 
                                        href={project.sourceCode[0]} 
                                        target="_blank"
                                        className="flex items-center border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 p-2"
                                    >
                                        <img 
                                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
                                            className="w-10 mr-3"
                                        /> 
                                        Github
                                    </a>
                                    <a 
                                        href="#" 
                                        className="flex items-center py-2 px-3 border border-neutral-700 p-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-600"
                                    >
                                        <Eye className="mr-3"/>
                                        View Live
                                    </a>
                                </div>
                            )}
                            {project.title === "Deal Or No Deal" && (
                                <div className="flex flex-wrap justify-center mt-10 gap-x-5 mb-10 gap-y-4">
                                    <a 
                                        href={project.sourceCode[0]} 
                                        target="_blank" 
                                        className="flex items-center border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 p-2"
                                    >
                                        <img 
                                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
                                            className="w-10 mr-3"
                                        /> 
                                        Github - GUI
                                    </a>
                                    <a 
                                        href={project.sourceCode[1]} 
                                        target="_blank" 
                                        className="flex items-center border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 p-2"
                                    >
                                        <img 
                                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
                                            className="w-10 mr-3"
                                        /> 
                                        Github - CUI
                                    </a>
                                </div>
                            )}
                            {project.title === "Banking System" && (
                                <div className="flex flex-wrap justify-center mt-10 gap-x-5 mb-10 gap-y-4">
                                    <a 
                                        href={project.sourceCode[0]} 
                                        target="_blank"
                                        className="flex items-center border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 p-2"
                                    >
                                        <img 
                                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
                                            className="w-10 mr-3"
                                        /> 
                                        Github
                                    </a>
                                </div>
                            )}
                            {project.title === "CabsOnline" && (
                                <div className="flex flex-wrap justify-center mt-10 gap-x-5 mb-10 gap-y-4">
                                    <a 
                                        href={project.sourceCode[0]} 
                                        target="_blank"
                                        className="flex items-center border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 p-2"
                                    >
                                        <img 
                                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
                                            className="w-10 mr-3"
                                        /> 
                                        Github
                                    </a>
                                </div>
                            )}
                            {project.title === "Status Posting System" && (
                                <div className="flex flex-wrap justify-center mt-10 gap-x-5 mb-10 gap-y-4">
                                    <a 
                                        href={project.sourceCode[0]} 
                                        target="_blank" 
                                        className="flex items-center border border-neutral-700 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 p-2"
                                    >
                                        <img 
                                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
                                            className="w-10 mr-3"
                                        /> 
                                        Github
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="w-full lg:w-auto">
                            {project.screenshots.map((screenshot, index) => (
                                <img key={index} src={screenshot} className="flex-shrink-0 w-50 p-10"/>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsSection