import Link from "next/link";

export function CTA() {
    return (
        <section id="hero" className="bg-shuttle-gray-50 min-h-122 w-full mx-auto py-8 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-8 flex flex-col gap-10 justify-between items-center">
                <h3 className="text-shuttle-gray-50 w-177.5 text-5xl font-semibold text-center">Unlock Your Potential as a Creator with ByteSpace</h3>
                <p className="w-241 text-shuttle-gray-50 text-lg font-body text-center">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
                <button className="font-label"><Link href="/register">Join as a Creator</Link></button>

            </div>
        </section>
    )
}