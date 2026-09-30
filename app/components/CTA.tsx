import Image from "next/image";
import cone_3 from "@/public/assets/objects/cone_3.png";
import cone_2 from "@/public/assets/objects/cone_2.png";
import ring_2 from "@/public/assets/objects/ring_2.png";
import pyramid_2 from "@/public/assets/objects/pyramid_2.png";
import spiral_1 from "@/public/assets/objects/spiral_1.png";
import spiral_2 from "@/public/assets/objects/spiral_2.png";
import spiral_4 from "@/public/assets/objects/spiral_4.png";

import Link from "next/link";

export async function CTA() {
    return (
        <section id="cta" className="relative overflow-hidden bg-shuttle-gray-50 min-h-122 w-full mx-auto py-8 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-8 flex flex-col gap-10 justify-between items-center">
                <h3 className="text-shuttle-gray-50 w-177.5 text-5xl font-semibold text-center">Unlock Your Potential as a Creator with ByteSpace</h3>
                <p className="w-241 text-shuttle-gray-50 text-lg font-body text-center">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
                <button className="font-label"><Link href="/register">Join as a Creator</Link></button>

            </div>
            <div>

                <div className="absolute -top-30 -left-20">
                    <Image className="h-75 w-auto" src={spiral_1} alt="spiral 1" />
                </div>

                <div className="absolute top-0 left-50">
                    <Image className="h-50 w-auto" src={spiral_2} alt="spiral 3" />
                </div>

                <div className="absolute bottom-20 -left-15">
                    <Image className="h-50 w-auto" src={cone_3} alt="cone 3" />
                </div>

                <div className="absolute -bottom-25 left-10">
                    <Image className="h-75 w-auto" src={ring_2} alt="ring 2" />
                </div>

                <div className="absolute top-0 right-50">
                    <Image className="h-50 w-auto" src={pyramid_2} alt="pyramid 2" />
                </div>

                <div className="absolute top-10 -right-40">
                    <Image className="h-100 w-auto" src={cone_2} alt="cone 2" />
                </div>

                <div className="z-1 absolute -bottom-30 right-20">
                    <Image className="h-75 w-auto" src={spiral_4} alt="spiral 4" />
                </div>

            </div>
        </section>
    )
}