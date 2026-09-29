import Image from "next/image"
import Banner from "@/public/auth_banner.png";
import LoginForm from "@/app/components/Login";

export default async function Login() {
    return <div className="text-shuttle-gray-50 w-full max-w-7xl mx-auto px-8">
        <div className="flex gap-30">

            <div className="w-1/2 h-180 flex flex-col justify-between">

                <div className="space-y-4">
                    <h1 className="font-medium text-xl">Sign in with ease</h1>
                    <p className="text-lg">Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
                </div>

                <div>
                    <Image src={Banner} alt=
                        "svg banner" loading="eager" width={548} className="h-auto"
                    />
                </div>

            </div>

            <div className="bg-white rounded-3xl w-1/2 h-180">
                <LoginForm />
            </div>
        </div>
    </div>
}