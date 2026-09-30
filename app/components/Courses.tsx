"use client"
import { useState } from "react";
import figma from "@/public/figma_course.png";
import digital_asset from "@/public/digital_asset_course.png";
import bigdata from "@/public/bigdata_course.png";
import productivity from "@/public/productivity_course.png";
import money from "@/public/money_course.png";
import idea from "@/public/idea_course.png";
import Ellipse from "@/public/Ellipse.png";
import Ellipse_1 from "@/public/Ellipse_1.png";
import Ellipse_2 from "@/public/Ellipse_2.png";
import Ellipse_3 from "@/public/Ellipse_3.png";
import others from "@/public/26+.png";
import Image from "next/image";
import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking"
]

const users = [
    { user: Ellipse },
    { user: Ellipse_1 },
    { user: Ellipse_2 },
    { user: Ellipse_3 },
    { user: others }
]

const minutesToHours = (minutes: number) => {
    if (minutes < 60) return `${minutes} minutes`;
    else {
        let m = minutes % 60, h = Math.trunc(minutes / 60);
        return `${h} hours ${m} mins`;
    }
}

const courses = [
    {
        category: ["Featured", "UI/UX Design"], cover: figma, name: "Learn Figma from Basic", author: "purepearl studio", rating: 4.5, level: "beginner", price: 25, duration: "lifetime", lessons: 17, length: 136, comments: 59
    },
    {
        category: ["Featured", "Digital Illustration"], cover: digital_asset, name: "Build Digital Asset", author: "purepearl studio", rating: 4.5, level: "beginner", price: 25, duration: "lifetime", lessons: 30, length: 300, comments: 200
    },
    {
        category: ["Featured", "Data Science"], cover: bigdata, name: "The Power of Big Data", author: "engineering mind", rating: 4.5, level: "intermediate", price: 10, duration: "month", lessons: 25, length: 136, comments: 73
    },
    {
        category: ["Featured", "Productivity"], cover: productivity, name: "Balancing Productivity and Self-Care", author: "howtown", rating: 4.5, level: "beginner", price: 10, duration: "month", lessons: 46, length: 560, comments: 722
    },
    {
        category: ["Featured", "Productivity"], cover: money, name: "Mastering Money Management", author: "howtown", rating: 4.5, level: "intermediate", price: 10, duration: "month", lessons: 5, length: 59, comments: 365
    },
    {
        category: ["Featured", "Freelance & Entrepreneurship"], cover: idea, name: "From Idea to Startup Success", author: "howtown", rating: 4.5, level: "advanced", price: 50, duration: "lifetime", lessons: 60, length: 400, comments: 122
    },
]
export function Courses() {
    const [isSelected, setIsSelected] = useState("Featured");

    return (
        <>
            <div className="w-full flex flex-wrap items-center justify-center">
                {categories.map(category =>
                    <div onClick={() => setIsSelected(category)} key={category} className={`flex items-center justify-center h-11 w-max px-4 py-3 m-3 rounded-3xl font-label ${category == isSelected ? "bg-electric-lime-400 text-shuttle-gray-950" : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-electric-lime-400 hover:text-shuttle-gray-950"} cursor-pointer transition-colors duration-500`}>{category}</div>
                )}
                <div className="text-persian-blue-800 font-label">+ More</div>
            </div>

            <div className="w-full grid grid-cols-3 gap-10">
                {
                    courses.filter(course => course.category.includes(isSelected)).map((course, id) =>
                        <div key={id} className="rounded-3xl p-5 flex flex-col justify-between h-96 border border-shuttle-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">

                            <div className="relative">
                                <Image src={course.cover} alt={course.name} width={400} height={250} className="w-full h-auto object-cover" />
                                <div className="absolute left-0 right-0 bottom-3 font-label text-xs mx-2 text-shuttle-gray-700 flex justify-between *:bg-shuttle-gray-100/60 *:rounded-3xl *:px-3 *:py-1.5">
                                    <div>{course.lessons} Lessons</div>
                                    <div>{minutesToHours(course.length)}</div>
                                    <div>{course.comments} Comments</div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 justify-between">

                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <h5 className="text-shuttle-gray-950 text-xl font-semibold leading-[120%]">
                                            {
                                                course.name.length > 20 ? <p>{course.name.slice(0, 20)}...</p> : course.name
                                            }
                                        </h5>
                                        <p className="text-shuttle-gray-700 font-body text-xs">by <span className="text-persian-blue-800">{course.author}</span></p>
                                    </div>

                                    <div>
                                        <div className="flex items-center font-body text-lg">{course.rating}<Star /></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-2">
                                    <p className="bg-shuttle-gray-50 text-shuttle-gray-700 flex justify-between items-center font-label text-xs font-medium px-3 py-1.5 gap-1 rounded-3xl capitalize">
                                        <ChartNoAxesColumnIncreasing className="h-3.5" />{course.level}
                                    </p>
                                    <div className="flex items-center shrink-0 -space-x-3 *:h-9 *:w-9">
                                        {
                                            users.map((user, id) =>
                                                <div key={id} className="rounded-full bg-electric-lime-400 flex items-center justify-center">
                                                    <Image alt="id" src={user.user} />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                                <div className="flex items-baseline">
                                    <h5 className="text-xl text-persian-blue-800 font-semibold">${course.price}</h5><p className="font-body text-xs text-shuttle-gray-700">/{course.duration}</p>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}