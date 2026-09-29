import Link from "next/link";
import Image from "next/image";

interface FooterLink {
    name: string;
    href: string;
}

const footerLinks: FooterLink[] = [
    {
        name: "Featured Courses", href: "/featured-courses"
    },
    {
        name: "Development", href: "/development"
    },
    {
        name: "Become a creator", href: "/become-a-creator"
    },
    {
        name: "Featured Categories", href: "/featured-categories"
    },
    {
        name: "Marketing", href: "/marketing"
    },
    {
        name: "Affiliate Program", href: "/affiliate-program"
    },
    {
        name: "Business", href: "/business"
    },
    {
        name: "Photography", href: "/photography"
    },
    {
        name: "Contact", href: "/contact"
    },
    {
        name: "IT", href: "/it"
    },
    {
        name: "Finance", href: "/finance"
    },
    {
        name: "Help", href: "/help"
    },
    {
        name: "Design", href: "/design"
    },
    {
        name: "Sport", href: "/sport"
    },
    {
        name: "About", href: "/about"
    },
]

const miscellaneousLinks: FooterLink[] = [
    {
        name: "Privacy Policy", href: "/privacy-policy"
    },
    {
        name: "Terms of Service", href: "/terms-of-service"
    },
    {
        name: "Cookies Settings", href: "/cookies-settings"
    }
]


export default async function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mx-auto w-full max-w-7xl px-8 py-18">

            <div className="grid grid-cols-2 gap-24">

                <div className="flex flex-col gap-11">

                    <div className="flex flex-col gap-4 justify-start items-start">
                        <Image className="w-auto h-auto" width={171} height={37} src={"/logo_black.png"} loading="eager" alt="ByteSpace New"></Image>
                        <p className="mt-3 text-sm tracking-tight text-left leading-relaxed">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">

                        <div className="flex gap-6 h-12">
                            <input placeholder="Enter your Email" className="flex-1 border border-zinc-200 px-6 py-4 rounded-4xl" />
                            <button className="bg-lime-300 px-6 py-3 rounded-4xl w-26">Search</button>
                        </div>

                        <p className="text-xs">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>

                    </div>

                </div>

                <div className="grid grid-cols-3 gap-x-10 text-sm mt-12">
                    {footerLinks.map((link) => (
                        <div key={link.name} className="self-end">
                            <Link
                                href={link.href}
                                target="_blank"
                                className=" transition-colors hover:text-logo gap-22"
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 border-t border-zinc-200 pt-8 flex items-center justify-between text-xs">
                <p >
                    &copy; {currentYear} ByteSpace. All rights reserved.
                </p>
                <div className="flex gap-6">
                    {
                        miscellaneousLinks.map(mlink =>
                            <Link key={mlink.name} href={mlink.href} target="_blank" >
                                {mlink.name}
                            </Link>
                        )
                    }
                </div>
            </div>

        </footer>
    );
}