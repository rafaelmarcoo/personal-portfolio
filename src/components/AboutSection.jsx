import { Dumbbell, Guitar, Coffee } from "lucide-react";
import { hobbies } from "../constants";
import testBarista from "../assets/hobbies/testBarista.jpg";
import testGuitar from "../assets/hobbies/testGuitar.jpg";
import testGym from "../assets/hobbies/testGym.jpg";

const AboutSection = () => {
  return (
    <div className="mt-16 px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
            About me!
        </h2>
        <h3 className="text-center pt-4 text-lg sm:text-xl p-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptatem et nostrum laboriosam qui ut cumque enim consequatur facere? Neque ea ipsum itaque aut incidunt!
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center p-5">
                Other than programming, I am a:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
                <div key={index} className="p-6 border border-neutral-700 rounded-lg shadow-lg bg-neutral-800">
                        <div className="flex items-center mb-4">
                            {hobby.title === "Waiter / Barista" && <Coffee />}
                            {hobby.title === "Musician - Guitarist" && <Guitar />}
                            {hobby.title === "Fitness Enthusiast" && <Dumbbell />}
                            <span className="ml-3 mt-2 mb-2 text-xl font-semibold">{hobby.title}</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-md text-neutral-500 flex-grow">
                                {hobby.description}
                            </p>
                            {hobby.title === "Waiter / Barista" && <img 
                                src={testBarista} 
                                alt="barista"
                                className="w-36 h-36 p-3 rounded-full object-cover"
                            />}
                            {hobby.title === "Musician - Guitarist" && <img 
                                src={testGuitar} 
                                alt="barista"
                                className="w-36 h-36 p-3 rounded-full object-cover"
                            />}
                            {hobby.title === "Fitness Enthusiast" && <img 
                                src={testGym} 
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