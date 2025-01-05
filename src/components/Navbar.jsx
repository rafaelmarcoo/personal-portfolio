import { useState } from "react"
import { navItems } from "../constants"
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const toggleMenuBar = () => {
        setBurgerMenu(!burgerMenu);
    };

    return (
        <nav className="sticky top-0 z-50 border-b py-3 border-neutral-600 backdrop-blur-lg">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <span className="text-3xl bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">Rafael Marco Manubay</span>
                    </div>
                    <ul className="hidden lg:flex ml-10 space-x-10">
                        {navItems.map((item, index) => (
                            <li key={index} className="">
                                <a href={item.href} className="hover:text-blue-500 transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="border border-neutral-700 p-2 rounded-md bg-gradient-to-r from-blue-300 to-blue-600">Download CV</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleMenuBar}>
                            {burgerMenu ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {burgerMenu && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden backdrop-blur-md">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                            <div>
                                <a href="#" className="py-2 px-3 border border-neutral-700 p-2 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 ">Download CV</a>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar