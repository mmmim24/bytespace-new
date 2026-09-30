import Link from "next/link";
import Image from "next/image";
import { currentYear } from "@/app/utils/lib";
import logo_black from "@/public/assets/logo/logo_black.png";
import { footerLinks, miscellaneousLinks } from "@/app/utils/data";

export async function Footer() {
    return (
        <footer className="mx-auto w-full max-w-7xl px-8 pt-18 flex flex-col gap-32.5">

            <div className="grid grid-cols-2 gap-24">

                <div className="flex flex-col gap-11">

                    <div className="flex flex-col gap-4 justify-start items-start">
                        <Image className="h-auto" width={171} height={37} src={logo_black} loading="eager" alt="ByteSpace New"></Image>
                        <p className="mt-3 font-body text-sm   text-left  ">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">

                        <div className="flex font-body gap-6 h-12">
                            <input placeholder="Enter your Email" className="flex-1 border border-shuttle-gray-100 px-6 py-4 rounded-4xl" />
                            <button className="
                            font-label">Search</button>
                        </div>

                        <p className="font-body text-xs">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>

                    </div>

                </div>

                <div className="grid grid-cols-3 gap-x-10 font-body text-sm mt-12">
                    {footerLinks.map((link) => (
                        <div key={link.name} className="self-end">
                            <Link
                                href={link.href}
                                target="_blank"
                                className=" transition-colors hover:text-persian-blue-800 gap-22"
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-6 border-t border-shuttle-gray-100 pt-6 flex items-center justify-between font-body text-xs">
                <p >
                    &copy; {currentYear} ByteSpace. All rights reserved.
                </p>
                <div className="flex gap-6">
                    {
                        miscellaneousLinks.map(mlink =>
                            <Link key={mlink.name} href={mlink.href} target="_blank" className=" transition-colors hover:text-persian-blue-800 hover:underline"
                            >
                                {mlink.name}
                            </Link>
                        )
                    }
                </div>
            </div>

        </footer>
    );
}