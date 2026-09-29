import { Clients } from "../components/Clients";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Clients />
            <CTA />
            <Testimonials />
        </>
    );
}
