"use client"

import Link from "next/link"

export default function RegisterForm() {
    return (
        <div className="flex flex-col justify-between">
            <div className="m-15 flex flex-col gap-10">

                <div>
                    <p className="text-lg text-persian-blue-800">
                        Create an account
                    </p>
                    <h1 className="text-[44px] leading-13 font-semibold text-shuttle-gray-950">
                        Welcome to ByteSpace
                    </h1>
                </div>

                <form className="flex flex-col gap-6 text-shuttle-gray-950">

                    <div className="flex flex-col">
                        <label className="text-sm mb-2">Full name</label>
                        <input type="text" placeholder="Jamie Davis" className="text-shuttle-gray-400 border-2 border-shuttle-gray-100 rounded-xl px-6 py-3 h-13" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm mb-2">Email</label>
                        <input type="email" placeholder="designer@example.com" className="text-shuttle-gray-400 border-2 border-shuttle-gray-100 rounded-xl px-6 py-3 h-13" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm mb-2">Password</label>
                        <input type="password" placeholder="********" className="text-shuttle-gray-400 border-2 border-shuttle-gray-100 rounded-xl px-6 py-3 h-13" />
                    </div>

                    <button className="self-end">Continue</button>

                </form>

            </div>

            <div className="
            text-shuttle-gray-700 self-center">Already have an account?<Link href="/login" className="ml-2 text-persian-blue-800">Login</Link></div>
        </div>
    )
}       