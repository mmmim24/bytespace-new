import Image from "next/image";
import about1 from "@/public/assets/frames/about1.png";
import about2 from "@/public/assets/frames/about2.png";
import { CircleCheck } from "lucide-react";

export async function Info() {
    return (
        <section id="info" className="bg-shuttle-gray-50 min-h-365 w-full mx-auto py-8 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-8 flex flex-col gap-18 justify-between items-center">

                <div className="flex items-center gap-16">

                    <div className="w-1/2 flex flex-col gap-10">
                        <h3 className="font-semibold text-[44px]   text-shuttle-gray-950">
                            Your Path to Professional Growth Starts Here!
                        </h3>
                        <p className="w-120 font-body text-lg text-shuttle-gray-700  ">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>
                        <div className="flex gap-14">
                            <div>
                                <h5 className="text-persian-blue-800 font-medium text-4xl">12K</h5>
                                <p className="text-shuttle-gray-700 font-body text-lg">Students</p>
                            </div>
                            <div>
                                <h5 className="text-persian-blue-800 font-medium text-4xl">70+</h5>
                                <p className="text-shuttle-gray-700 font-body text-lg">Courses</p>
                            </div>
                            <div>
                                <h5 className="text-persian-blue-800 font-medium text-4xl">16</h5>
                                <p className="text-shuttle-gray-700 font-body text-lg">Creators</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 hover:scale-105 transition-transform duration-500">
                        <Image src={about1} alt="about1" className="h-125 w-auto" />
                    </div>

                </div>

                <div className="flex items-center gap-16">

                    <div className="w-1/2 hover:scale-105 transition-transform duration-500">
                        <Image src={about2} alt="about2" className="h-125 w-auto" />
                    </div>

                    <div className="w-1/2">

                        <div className=" flex flex-col gap-10">
                            <h3 className="font-semibold text-[44px]   text-shuttle-gray-950">
                                Create & Manage Courses Easily.
                            </h3>
                            <p className="text-lg font-body text-shuttle-gray-700  ">
                                <span className="text-shuttle-gray-950 font-semibold">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
                            </p>
                            <div className="flex gap-14 text-shuttle-gray-950 font-label text-lg">
                                <ul className="space-y-3">
                                    <li className="flex gap-2"><CircleCheck className="text-persian-blue-800" />Share Your Expertise</li>
                                    <li className="flex gap-2"><CircleCheck className="text-persian-blue-800" />Monetize Your Passion</li>
                                    <li className="flex gap-2"><CircleCheck className="text-persian-blue-800" />Flexibility and Autonomy</li>
                                    <li className="flex gap-2"><CircleCheck className="text-persian-blue-800" />Build a Community</li>
                                </ul>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}