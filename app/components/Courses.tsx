"use client"
import Image from "next/image";
import { useState } from "react";
import { minutesToHours } from "@/app/utils/lib";
import { categories, courses, users } from "@/app/utils/data";
import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";

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
                                        <h5 className="text-shuttle-gray-950 text-xl font-semibold  ">
                                            {
                                                course.name.length > 20 ? <p>{course.name.slice(0, 20)}...</p> : course.name
                                            }
                                        </h5>
                                        <p className="text-shuttle-gray-700 font-body text-xs">by <span className="text-persian-blue-800">{course.author}</span></p>
                                    </div>

                                    <div>
                                        <div className="flex gap-1 items-center font-body text-lg">{course.rating}<Star /></div>
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
                                        <div className="rounded-full bg-electric-lime-400 flex items-center justify-center text-xs font-label">{course.lessons}+</div>
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