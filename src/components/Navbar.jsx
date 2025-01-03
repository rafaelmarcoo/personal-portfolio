import { navItems } from "../constants"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b py-3 border-neutral-600 backdrop-blur-lg">
        <div className="container relative px-4 mx-auto">
            <div className="flex justify-between items-center text-xl">
                <div className="flex items-center flex-shrink-0">
                    <span className="text-3xl bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">Rafael Marco Manubay</span>
                </div>
                <ul className="hidden lg:flex ml-5 space-x-10">
                    {navItems.map((item, index) => (
                        <li key={index} className="">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex items-center flex-shrink-0">
                    <a href="#" className="border border-neutral-700 p-2 rounded-md bg-gradient-to-r from-blue-300 to-blue-600">Download CV</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar