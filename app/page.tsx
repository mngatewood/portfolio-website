import { Hero } from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav"
import { Grid } from "@/components/Grid"
import { Projects } from "@/components/Projects"
import { navItems } from "@/data"
import { Testimonials } from "@/components/Testimonials"
import { Experience } from "@/components/Experience"
import { Alignment } from "@/components/Alignment"
import { Footer } from "@/components/Footer"

export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems}/>
				<Hero />
				<Grid />
				<Projects />
				<Testimonials />
				<Experience />
				<Alignment />
				<Footer />
			</div>
		</main>
	)
}
