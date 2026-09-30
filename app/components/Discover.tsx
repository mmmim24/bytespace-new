import Image from "next/image";
import design from "@/public/design.png";
import development from "@/public/development.png";
import it from "@/public/it.png";
import business from "@/public/business.png";
import marketing from "@/public/marketing.png";
import photography from "@/public/photography.png";
import { Courses } from "./Courses";

const learningPaths = [
    {
        icon: design, name: "Design"
    },
    {
        icon: development, name: "Development"
    },
    {
        icon: it, name: "IT & Software"
    },
    {
        icon: business, name: "Business"
    },
    {
        icon: marketing, name: "Marketing"
    },
    {
        icon: photography, name: "Photography"
    },
]

export function Discover() {

    return (
        <section id="discover" className="bg-white min-h-365 w-full mx-auto py-16 flex flex-col justify-center">

            <div className="w-full max-w-7xl mx-auto px-8 flex flex-col gap-18 justify-between items-center">

                <div className="flex flex-col items-center justify-center text-center gap-4">

                    <h3 className="w-147 text-5xl text-shuttle-gray-950 font-semibold">Discover Your Passion, Build Your Skills</h3>

                    <p className="w-230 text-shuttle-gray-400 text-lg font-body">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>

                </div>

                <Courses />

                <div className="flex flex-col items-center justify-center text-center gap-4">

                    <h4 className="text-4xl text-shuttle-gray-950 font-semibold">Explore Diverse Learning Paths at Bytespace</h4>

                    <p className="w-230 text-shuttle-gray-400 text-lg font-body">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>

                </div>

                <div className="flex gap-10">
                    {
                        learningPaths.map(el =>
                            <div key={el.name} className="flex flex-col gap-2 items-center justify-center rounded-3xl border border-shuttle-gray-200 h-42 w-42 hover:shadow-2xl hover:border-persian-blue-800 transition-all duration-500 cursor-pointer">

                                <div className="bg-electric-lime-400 rounded-full h-15 w-15 flex items-center justify-center"><Image src={el.icon} alt={el.name} /></div>

                                <div className="text-xl font-label">{el.name}</div>

                            </div>
                        )
                    }
                </div>

            </div>

        </section>
    )
}