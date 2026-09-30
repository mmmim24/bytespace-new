import Image from "next/image";
import boy from "@/public/boy.png";
import circle from "@/public/hero-half-circle.png";
import cone_1 from "@/public/cone_1.png";
import pyramid_1 from "@/public/pyramid_1.png";
import ring_1 from "@/public/ring_1.png";
import spiral_1 from "@/public/spiral_1.png";
import spiral_2 from "@/public/spiral_2.png";
import spiral_3 from "@/public/spiral_3.png";
import Ellipse from "@/public/Ellipse.png";
import Ellipse_1 from "@/public/Ellipse_1.png";
import Ellipse_2 from "@/public/Ellipse_2.png";
import Ellipse_3 from "@/public/Ellipse_3.png";
const users = [
    { user: Ellipse },
    { user: Ellipse_1 },
    { user: Ellipse_2 },
    { user: Ellipse_3 }
]

export function Hero() {
    return (
        <section id="hero" className="relative overflow-clip bg-shuttle-gray-50 min-h-screen w-full mx-auto py-8 flex flex-col justify-around">
            <div className="w-full z-2 max-w-7xl mx-auto px-8 flex flex-col gap-15 justify-between items-center">
                <div className="w-250 space-y-8">
                    <h1 className="text-shuttle-gray-50 text-7xl font-semibold text-center">Get Access to Hundreds Courses Available</h1>
                    <p className="text-shuttle-gray-50 font-body text-lg text-center">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
                </div>
                <div className="flex gap-6 w-145 h-12 text-lg">
                    <div className="flex-1 flex items-center gap-2 bg-white rounded-3xl px-6 py-4 ">
                        🔍 <input placeholder="Course, topic, creator" className="outline-none  font-body w-full bg-transparent text-shuttle-gray-400 rounded-4xl" />

                    </div>
                    <button className="font-label">Search</button>
                </div>
            </div>

            <div >

                <div className="z-2 absolute right-160 bottom-60">
                    <div className="h-24 bg-white rounded-2xl p-4 flex flex-col justify-between">
                        <p className="font-label text-sm">Learning Progress</p>
                        <h5 className="text-4xl font-semibold">55%</h5>
                        <div className="w-full bg-shuttle-gray-50 rounded-3xl">
                            <div className="w-[55%] h-2 rounded-3xl bg-electric-lime-400"></div>
                        </div>
                    </div>
                </div>

                <div className="z-2 absolute left-130 bottom-70">
                    <div className="h-20 bg-white rounded-2xl p-4 flex flex-col justify-between">
                        <p className="font-label">UI/UX Design</p>
                        <h5 className="text-xs font-body text-shuttle-gray-400">200 Courses 1000+ Students</h5>
                    </div>
                </div>

                <div className="z-2 absolute left-170 bottom-30">
                    <div className="h-30 bg-white rounded-2xl p-4 flex flex-col justify-between">
                        <p className="font-label">Happy Students</p>
                        <p className="font-body text-shuttle-gray-400 text-xs"><span className="text-shuttle-gray-950">4.5</span>(232)</p>
                        <div className="flex items-center shrink-0 -space-x-3 *:h-9 *:w-9">
                            {
                                users.map((user, id) =>
                                    <div key={id} className="rounded-full bg-electric-lime-400 flex items-center justify-center">
                                        <Image alt="id" src={user.user} />
                                    </div>
                                )
                            }
                            <div className="rounded-full bg-electric-lime-400 flex items-center justify-center text-xs font-label">2K+</div>
                        </div>
                    </div>
                </div>

                <div className="z-1 absolute bottom-0 left-[50%] translate-x-[-50%]">
                    <Image src={boy} alt="boy with headphone" width={800} height={800} />
                </div>
                <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
                    <Image src={circle} alt="half circle" width={800} height={800} />
                </div>

                <div className="absolute top-50 -left-30">
                    <Image src={spiral_1} alt="spiral 1" width={400} height={400} />
                </div>
                <div className="absolute top-50 -right-30">
                    <Image src={cone_1} alt="cone" width={400} height={400} />
                </div>

                <div className="absolute bottom-77 left-70">
                    <Image src={spiral_2} alt="spiral 2" width={150} height={150} />
                </div>
                <div className="absolute bottom-77 right-70">
                    <Image src={pyramid_1} alt="pyramid" width={150} height={150} />
                </div>

                <div className="absolute -bottom-20 right-100">
                    <Image src={spiral_3} alt="spiral 3" width={300} height={300} />
                </div>
                <div className="absolute -bottom-20 left-100">
                    <Image src={ring_1} alt="ring" width={300} height={300} />
                </div>

            </div>
        </section>
    )
}