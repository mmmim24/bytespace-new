import { clients } from "@/app/utils/data"
import Marquee from "react-fast-marquee";
import Image from "next/image"

export async function Clients() {
    return (
        <section id="clients" className="bg-shuttle-gray-50 h-50 w-full mx-auto py-8 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-8 flex justify-between">
                <Marquee autoFill={true} pauseOnHover={true} speed={50}>
                    <ul className="flex items-center justify-center gap-10 first:ml-10">
                        {
                            clients.map(client =>
                                <li key={client.name}>
                                    <Image src={client.logo} alt={client.name} className="w-50 h-auto" />
                                </li>
                            )
                        }
                    </ul>
                </Marquee>
            </div>
        </section>
    )
}