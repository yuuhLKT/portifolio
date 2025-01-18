import { useState } from 'react'
import MenuIcon from '../icons/MenuIcon'
import XIcon from '../icons/XIcon'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <div className="relative flex justify-between items-center h-32 px-4 md:px-8 py-9">
            <div className="font-bold text-black1 text-2xl md:text-3xl">
                YURI LUIZ
            </div>

            <div className="md:hidden z-50">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <XIcon /> : <MenuIcon />}
                </button>
            </div>

            <nav
                className={`fixed inset-0 bg-white flex items-center justify-center transition-transform transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } md:relative md:translate-x-0 md:flex-row md:space-x-8 md:bg-transparent md:items-center`}
            >
                <ul className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 text-xl">
                    <li className="text-black1 font-medium cursor-pointer">
                        <a href="#home" onClick={handleLinkClick}>
                            Home
                        </a>
                    </li>
                    <li className="text-black1 font-medium cursor-pointer">
                        <a href="#about" onClick={handleLinkClick}>
                            About
                        </a>
                    </li>
                    <li className="text-black1 font-medium cursor-pointer">
                        <a href="#projects" onClick={handleLinkClick}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <button className="bg-black text-white font-medium px-6 py-2 rounded">
                            <a href="#contact" onClick={handleLinkClick}>
                                Contact
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
