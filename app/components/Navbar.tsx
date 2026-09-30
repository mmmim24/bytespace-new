"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import logo_white from "@/public/assets/logo/logo_white.png"

interface NavItem {
    name: string | React.ReactElement;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Home", href: "#hero" },
    { name: "Courses", href: "#discover" },
    { name: "Creators", href: "#cta" }
];

const links: NavItem[] = [
    { name: "Sign in", href: "/login" },
    { name: "Join Us", href: "/register" },
    { name: <ShoppingBag />, href: "/cart" }
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.screenY) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed flex items-center top-0 ${isScrolled ? 'h-15' : 'h-30'} scroll:h-20 z-49 w-full bg-primary backdrop-blur-xl text-white`}>

            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 h-16">

                <Link href="/" className="text-xl text-zinc-900">
                    <Image className='h-auto' width={171} height={37} src={logo_white} loading="eager" alt="ByteSpace New"></Image>
                </Link>

                <div className="flex items-center justify-center overflow-hidden">

                    <nav className="flex z-1 items-center space-x-6">
                        {navItems.map((item, id) => {

                            return (
                                <Link
                                    key={id}
                                    href={item.href}
                                    className="font-body hover:-translate-y-1 hover:font-bold focus:-translate-y-1 focus:font-bold transform-all duration-500"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex z-1 items-center space-x-6">
                    {links.map((item, id) => {

                        return (
                            <Link
                                key={id}
                                href={item.href}
                                className="font-body"
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

            </div>


        </header>
    );
}