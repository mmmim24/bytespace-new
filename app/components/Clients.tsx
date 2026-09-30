import logo1 from "@/public/logo1.png"
import logo2 from "@/public/logo2.png"
import logo3 from "@/public/logo3.png"
import logo4 from "@/public/logo4.png"
import logo5 from "@/public/logo5.png"
import Image from "next/image"

import Marquee from "react-fast-marquee";

const clients = [
    { name: "client1", logo: logo1 },
    { name: "client2", logo: logo2 },
    { name: "client3", logo: logo3 },
    { name: "client4", logo: logo4 },
    { name: "client5", logo: logo5 },
]

export function Clients() {
    return (
        <section className="bg-shuttle-gray-50 h-50 w-full mx-auto py-8 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-8 flex justify-between">
                <Marquee autoFill={true} pauseOnHover={true} speed={50}>
                    <ul className="flex items-center justify-center gap-10 first:ml-10">
                        {
                            clients.map(client =>
                                <li key={client.name}>
                                    <Image src={client.logo} alt={client.name} width={200} height={50} />
                                </li>
                            )
                        }
                    </ul>
                </Marquee>
            </div>
        </section>
    )
}