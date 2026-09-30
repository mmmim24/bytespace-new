"use client"

import Link from "next/link"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LoginForm() {
    return (
        <div className="flex flex-col justify-between">
            <div className="m-15 flex flex-col gap-10">

                <div>
                    <p className="font-body text-lg text-persian-blue-800">
                        Sign In
                    </p>
                    <h1 className="text-[44px] leading-13 font-semibold text-shuttle-gray-950">
                        Welcome Back
                    </h1>
                </div>

                <form className="flex flex-col gap-6 text-shuttle-gray-950">

                    <div className="flex flex-col">
                        <label className="font-label text-sm mb-2">Email</label>
                        <input type="email" placeholder="designer@example.com" className="font-body text-lg text-shuttle-gray-400 border-2 border-shuttle-gray-100 rounded-xl px-6 py-3 h-13" />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-label text-sm mb-2">Password</label>
                        <input type="password" placeholder="********" className="font-body text-lg text-shuttle-gray-400 border-2 border-shuttle-gray-100 rounded-xl px-6 py-3 h-13" />
                    </div>

                    <button className="font-label self-end">Sign In</button>

                </form>

            </div>

            <div className="font-body text-lg flex items-center gap-3 text-shuttle-gray-400 mx-15">
                <div className="w-1/2 h-px bg-shuttle-gray-200"></div>
                or
                <div className="w-1/2 h-px bg-shuttle-gray-200"></div>
            </div>

            <div className="mt-3 pt-8 flex items-center justify-center gap-4 py-10 text-xs *:border-shuttle-gray-200 *:p-4 *:border *:rounded-3xl">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="text-shuttle-gray-950" />
                <FontAwesomeIcon icon={faGoogle} size="2x" className="text-shuttle-gray-950" />
            </div>

            <div className="
            font-body text-shuttle-gray-700 self-center">New user?<Link href="/register" className="ml-2 text-persian-blue-800">Create an account</Link></div>
        </div>
    )
}       