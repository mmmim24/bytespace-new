import Sarah from "@/public/Sarah.png"
import James from "@/public/James.png"
import Alex from "@/public/Alex.png"
import Image from "next/image"

const testimonials = [
    { image: Sarah, name: "Sarah Maddison", designation: "Enthusiastic Learner", quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
    { image: James, name: "James Litt", designation: "Lifelong Learner", quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
    { image: Alex, name: "Alex Bruke", designation: "Inspired Creator", quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="min-h-195 w-full mx-auto py-8 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-8 flex flex-col gap-18 justify-between">

                <div className="grid grid-cols-2 gap-12">
                    <h3 className="text-5xl text-shuttle-gray-950 font-semibold">Discover What Our Community Is Saying</h3>
                    <div>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</div>
                </div>

                <div className="grid grid-cols-3 gap-10 h-110">
                    {testimonials.map(testimonial =>
                        <div className="bg-white rounded-3xl p-6 flex flex-col gap-6" key={testimonial.name}>
                            <div className="border-2 border-persian-blue-400 self-start rounded-full w-20 h-20 flex justify-center items-center">
                                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} />
                            </div>
                            <div>
                                <h5 className="text-xl font-medium">{testimonial.name.split(/\s+/)[0]} {testimonial.name.split(/\s+/)[1].trim()[0]}.</h5>
                                <p className="text-lg text-persian-blue-800">{testimonial.designation}</p>
                            </div>
                            <div className="text-lg text-shuttle-gray-700">"{testimonial.quote}"</div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}