import Image from "next/image"
import Banner from "@/public/assets/frames/auth_banner.png";
import { RegisterForm } from "@/app/components/Register";

export default async function Register() {
    return <div className="text-shuttle-gray-50 w-full max-w-7xl mx-auto px-8">
        <div className="flex gap-30">

            <div className="w-1/2 h-180 flex flex-col justify-between">

                <div className="space-y-4">
                    <h1 className="font-semibold text-xl">Sign up and come in</h1>
                    <p className="font-body text-lg">The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost</p>
                </div>

                <div>
                    <Image src={Banner} alt=
                        "svg banner" loading="eager" width={548} className="h-auto"
                    />
                </div>

            </div>

            <div className="bg-white rounded-3xl w-1/2 h-180">
                <RegisterForm />
            </div>
        </div>
    </div>
}