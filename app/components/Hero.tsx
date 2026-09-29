import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Search } from "lucide-react"
export function Hero() {
    return (
        <section id="hero" className="bg-shuttle-gray-50 min-h-[calc(100vh-200px)] w-full mx-auto py-8 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-8 flex flex-col gap-15 justify-between items-center">
                <div className="w-250 space-y-8">
                    <h1 className="text-shuttle-gray-50 text-7xl font-semibold text-center">Get Access to Hundreds Courses Available</h1>
                    <p className="text-shuttle-gray-50 text-lg text-center">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
                </div>
                <div className="flex gap-6 w-145 h-12">
                    <input placeholder="🔍 Course, topic, creator" className="flex-1 bg-white border border-shuttle-gray-100 text-shuttle-gray-400 px-6 py-4 rounded-4xl" />
                    <button>Search</button>
                </div>
            </div>
        </section>
    )
}