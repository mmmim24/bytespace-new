import { Clients } from "../components/Clients";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Info } from "../components/Info";
import { Discover } from "../components/Discover";

export default function Home() {
    return (
        <>
            <Hero />
            <Clients />
            <Discover />
            <Info />
            <CTA />
            <Testimonials />
        </>
    );
}
