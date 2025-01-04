import { Dumbbell, Guitar, Coffee } from "lucide-react"
import { hobbies } from "../constants" 

const AboutSection = () => {
  return (
    <div className="mt-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
            About me!
        </h2>
        <h3 className="text-center pt-4 text-lg sm:text-xl p-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptatem et nostrum laboriosam qui ut cumque enim consequatur facere? Neque ea ipsum itaque aut incidunt!
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center p-5">
                Other than programming, I am a:
            </h2>
        <div className="flex flex-wrap">
            {hobbies.map((hobby, index) => (
                <div key={index} className="w-full sm:w-1/2 ld:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700">
                        <div>

                        </div>
                        {hobby.title === "Waiter / Barista" && <Coffee />}
                        {hobby.title === "Musician - Guitarist" && <Guitar />}
                        {hobby.title === "Fitness Enthusiast" && <Dumbbell />}
                        <h3 className="mt-1 mb-2 text-xl">{hobby.title}</h3>
                        <p className="text-md text-neutral-500">{hobby.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AboutSection