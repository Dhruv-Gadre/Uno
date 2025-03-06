import React, { useState } from "react"
import { Menu, X, Heart, Shield, MessagesSquare } from "lucide-react"
import logo from "../assets/logo.jpg"

const navItems = [
    {
        label: "Journey",
        href: "#journey",
        icon: <Heart className="mr-2 inline" size={20} />
    },
    {
        label: "Support",
        href: "#support",
        icon: <Shield className="mr-2 inline" size={20} />
    },
    {
        label: "Community",
        href: "#community",
        icon: <MessagesSquare className="mr-2 inline" size={20} />
    }
];

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 bg-gradient-to-r from-[#2A9D8F] to-[#264653] border-b border-[#333333] backdrop-blur-lg shadow-lg">
            <div className="container px-4 mx-auto relative text-sm text-[#F4EAE0]">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <img
                            className="h-12 w-12 mr-3 rounded-full border-2 border-[#A7C957]"
                            src={logo}
                            alt="Recovery Journey Logo"
                        />
                        <span className="text-2xl font-bold tracking-tight text-[#F4EAE0]">
                            RecoveryPath
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex ml-14 space-x-8">
                        {navItems.map((item, index) => (
                            <li key={index} className="group">
                                <a
                                    href={item.href}
                                    className="flex items-center text-[#F4EAE0] hover:text-[#A7C957] transition duration-300 transform hover:scale-105"
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <a
                            href="#login"
                            className="py-2 px-4 border-2 border-[#A7C957] text-[#A7C957] rounded-full hover:bg-[#A7C957] hover:text-[#264653] transition-all font-semibold"
                        >
                            Log In
                        </a>
                        <a
                            href="#signup"
                            className="py-2 px-4 bg-gradient-to-r from-[#A7C957] to-[#E9C46A] text-[#264653] rounded-full hover:from-[#E9C46A] hover:to-[#A7C957] transition-all font-semibold"
                        >
                            Start Your Journey
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleNavbar}
                            className="text-[#F4EAE0] focus:outline-none"
                        >
                            {mobileDrawerOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="fixed inset-0 bg-[#264653] z-50 lg:hidden">
                        <div className="container mx-auto px-4 py-8">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center">
                                    <img
                                        className="h-12 w-12 mr-3 rounded-full border-2 border-[#A7C957]"
                                        src={logo}
                                        alt="Recovery Journey Logo"
                                    />
                                    <span className="text-2xl font-bold text-[#F4EAE0]">
                                        RecoveryPath
                                    </span>
                                </div>
                                <button
                                    onClick={toggleNavbar}
                                    className="text-[#F4EAE0] focus:outline-none"
                                >
                                    <X size={30} />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-6 text-center">
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="text-[#F4EAE0] text-xl flex items-center justify-center hover:text-[#A7C957] transition"
                                        onClick={toggleNavbar}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </a>
                                ))}

                                <div className="flex flex-col space-y-4 pt-6">
                                    <a
                                        href="#login"
                                        className="w-full py-3 border-2 border-[#A7C957] text-[#A7C957] rounded-full hover:bg-[#A7C957] hover:text-[#264653] transition-all font-semibold"
                                    >
                                        Log In
                                    </a>
                                    <a
                                        href="#signup"
                                        className="w-full py-3 bg-gradient-to-r from-[#A7C957] to-[#E9C46A] text-[#264653] rounded-full hover:from-[#E9C46A] hover:to-[#A7C957] transition-all font-semibold"
                                    >
                                        Start Your Journey
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;