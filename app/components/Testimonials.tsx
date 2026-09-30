import Image from "next/image"
import { testimonials } from "@/app/utils/data";

export async function Testimonials() {
    return (
        <section id="testimonials" className="min-h-195 w-full mx-auto py-8 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-8 flex flex-col gap-18 justify-between">

                <div className="grid grid-cols-2 gap-12">
                    <h3 className="text-5xl text-shuttle-gray-950 font-semibold">Discover What Our Community Is Saying</h3>
                    <div className="font-body text-lg">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</div>
                </div>

                <div className="grid grid-cols-3 gap-10 h-110">
                    {testimonials.map(testimonial =>
                        <div className="bg-white hover:scale-105 hover:shadow-2xl transition-all duration-500 rounded-3xl p-6 flex flex-col gap-6" key={testimonial.name}>
                            <div className="border-2 border-persian-blue-800 self-start rounded-full w-20 h-20 flex justify-center items-center">
                                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} />
                            </div>
                            <div>
                                <h5 className="text-xl font-semibold">{testimonial.name.split(/\s+/)[0]} {testimonial.name.split(/\s+/)[1].trim()[0]}.</h5>
                                <p className="font-body text-lg text-persian-blue-800">{testimonial.designation}</p>
                            </div>
                            <div className="font-body text-lg text-shuttle-gray-700">"{testimonial.quote}"</div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}