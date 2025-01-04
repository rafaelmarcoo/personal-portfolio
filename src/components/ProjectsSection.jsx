import { projects } from "../constants"

const ProjectsSection = () => {
  return (
    <div className="mt-16 px-6">
        <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
                Projects
            </h2>
            <h3 className="text-center pt-4 text-lg sm:text-xl p-5">
            Below are projects I have proudly made/currently making!
        </h3>
            {projects.map((project, index) => (
                <div className="border border-neutral-400 mb-10">
                    <div>
                        <h3 className="text-center text-2xl sm:text-3xl p-5">
                            {project.title}
                        </h3>
                        <div className="flex gap-x-5 gap-y-4 justify-center">
                            {project.technology.map((technology, index) => (
                                <img src={technology} 
                                alt="logo"
                                className="w-10 mb-3" 
                            />
                            ))}
                        </div>
                    </div>
                    <div></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsSection