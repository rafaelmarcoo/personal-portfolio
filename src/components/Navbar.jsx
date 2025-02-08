import { useState } from "react"
import { navItems } from "../constants"
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const toggleMenuBar = () => {
        setBurgerMenu(!burgerMenu);
    };

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if(targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
        setBurgerMenu(false);
    }

    return (
        <nav className="sticky top-0 z-50 border-b py-3 border-neutral-600 backdrop-blur-lg">
            <div className="max-w-7xl px-8 mx-auto text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <span className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent hover:text-red-400 transition-colors duration-200">Rafael Marco Manubay</span>
                    </div>
                    <ul className="hidden lg:flex ml-10 space-x-10 text-lg">
                        {navItems.map((item, index) => (
                            <li key={index} className="">
                                <a 
                                    href={item.href} 
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="hover:text-blue-500 transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="border border-neutral-700 p-2 rounded-md bg-gradient-to-r from-blue-300 to-blue-600 transition-transform hover:scale-110">Download CV</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleMenuBar}>
                            {burgerMenu ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {burgerMenu && (
                    <div className="fixed top-[60px] left-0 right-0 text-lg text-center lg:hidden border border-neutral-700 w-full p-12 flex flex-col justify-center items-center bg-neutral-900 space-y-6">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a 
                                        href={item.href} 
                                        onClick={(e) => handleScroll(e, item.href)}
                                        className="hover:text-blue-500 transition-colors duration-200"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <div className="mt-6 transition-transform hover:scale-105">
                                <a href="#" className="py-3 px-3 border border-neutral-700 p-2 rounded-md bg-gradient-to-r from-blue-300 to-blue-600  ">Download CV</a>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar