import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

interface NavItem {
    name: string | React.ReactElement;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Creators", href: "#creators" }
];

const links: NavItem[] = [
    { name: "Sign in", href: "/login" },
    { name: "Join Us", href: "/register" },
    { name: <ShoppingBag />, href: "/cart" }
]

export default async function Navbar() {

    return (
        <header className="fixed flex items-center top-0 h-30 z-49 w-full bg-transparent bg-primary text-white">

            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 h-16">

                <Link href="/" className="text-xl text-zinc-900">
                    <Image className='h-auto' width={171} height={37} src={"/logo_text.png"} loading="eager" alt="ByteSpace New"></Image>
                </Link>

                <div className="flex items-center justify-center overflow-hidden">

                    <nav className="flex z-1 items-center space-x-6">
                        {navItems.map((item, id) => {

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