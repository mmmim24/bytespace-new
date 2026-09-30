import { Clients } from "@/app/components/Clients";
import { Hero } from "@/app/components/Hero";
import { Testimonials } from "@/app/components/Testimonials";
import { CTA } from "@/app/components/CTA";
import { Info } from "@/app/components/Info";
import { Discover } from "@/app/components/Discover";

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
