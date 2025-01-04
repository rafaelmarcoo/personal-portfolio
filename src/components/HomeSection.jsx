import testPFP from "../assets/testPFP.jpg";

const HomeSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Hi! I'm Rafael Marco Manubay</h1>
        <h2 className="pt-3 text-xl tracking-wide"
        >
          Experienced with 
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
            {" "}
            Full Stack Development
          </span>
        </h2>
        <h3 className="pt-4 text-lg sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum fugiat fugit eos omnis consequuntur ullam quibusdam architecto veritatis harum corrupti illo est alias eum placeat, eius in quasi eaque quo perspiciatis adipisci ab. Vel optio, modi minus esse, ratione porro ea culpa error temporibus velit et perspiciatis dolor perferendis?
        </h3>
      </div>

      <div className="mt-10 w-full sm:w-1/2 p-4 flex justify-center rounded-full">
        <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden">
          <img 
            src={testPFP} 
            alt="profilePhoto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeSection