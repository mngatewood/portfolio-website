import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { BorderMagicButton } from './ui/BorderMagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { FlipWords } from './ui/FlipWords'

export const Hero = () => {

	const words = [
		"Software Engineer", 
		"Problem-Solver", 
		"Collaborator", 
		"Army Veteran",
		"Team Player",
		"Communicator", 
		"Learner", 
		"Father & Husband",
		"Leader", 
		"Creator", 
		"Professional", 
		"Contributor", 
		"Go-Getter",
		"Tinkerer",
		"Boardgamer"
	]

  	return (
		<div className="flex flex-col justify-center items-center h-screen pb-20 pt-36">
			<div>
				<Spotlight className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen fill:white"/>
				<Spotlight className="top-10 left-full h-[80vh] w-[50vw] fill:purple"/>
				<Spotlight className="top-28 left-80 h-[80vh] w-[50vw] fill:blue"/>
			</div>
			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"/>
			</div>
		  	<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
					<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Michael N. Gatewood</h2>
					<TextGenerateEffect
						className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
						words="Multi-Disciplined"
					/>
					<div className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6 text-purple font-bold">
						<FlipWords words={words} />
					</div>
					<p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl">Let's build something together!</p>
					<a href="#projects" title="See My Projects">
						<BorderMagicButton
							text="See My Projects"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}
