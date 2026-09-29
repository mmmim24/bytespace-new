import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="bg-primary flex-1">
            <div className="h-30 w-full max-w-7xl mx-auto px-8 flex items-center">
                <Link href="/" className="cursor-pointer">
                    <Image src={Logo} alt="logo" height={32} width={29} />
                </Link>
            </div>
            {children}
        </main>
    );
}