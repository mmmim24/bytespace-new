import { Clients } from "../components/Clients";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <Clients />
            <Testimonials />
        </>
    );
}
