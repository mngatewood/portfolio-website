"use client"
import React, { useState } from 'react'
import { Cover } from './ui/Cover'
import { Meteors } from './ui/Meteors'
import { SparklesCore } from './ui/Sparkles'
import { BorderMagicButton } from './ui/BorderMagicButton'
import { FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import { InlineWidget } from "react-calendly";
import { SlClose } from "react-icons/sl";
import { IconContext } from 'react-icons'
import { MdOutlineMail } from 'react-icons/md'
import { IoCopyOutline } from 'react-icons/io5'

export const Footer = () => {
	const [calendlyVisibility, setCalendlyVisibility] = React.useState("invisible")
	const [calendlyOpacity, setCalendlyOpacity] = React.useState("opacity-0")
	const [copied, setCopied] = useState(false);

	const launchCalendly = () => {
		setCalendlyOpacity("opacity-100")
		setCalendlyVisibility("visible")
	}

	const closeCalendly = () => {
		setCalendlyOpacity("opacity-0")
		setCalendlyVisibility("invisible")
	}

	const handleCopy = () => {
		const text = "michael@mngatewood.com";
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 5000);
	};

	return (
		<section id="footer">
			<div className=" w-full relative h-80 my-20">
				<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
				<div className="relative flex flex-col justify-evenly bg-gray-900 px-4 py-8 h-full overflow-hidden rounded-2xl shadow-[inset_-2px_-2px_6px_36px_rgba(0,3,25,0.8),_2px_2px_6px_18px_rgba(0,3,25,0.8)]">
					<h1 className="heading mx-auto">
						Ready to <span className="text-nowrap italic"><Cover>move forward</Cover>?</span>
					</h1>
					<div className="mt-4 z-20 flex sm:flex-row flex-col justify-evenly sm:justify-center items-center sm:gap-16 gap-8">
						{/* <a href="mailto:michael@mngatewood.com">
							<BorderMagicButton 
								text="Send me an email" 
								icon={<FaLocationArrow />} 
								position="right"
								otherClasses="w-72"
							/>
						</a> */}
						<BorderMagicButton
							text={copied ? "Email is Copied!" : "Copy my email address"}
							icon={<IoCopyOutline />}
							position="left"
							handleClick={handleCopy}
							otherClasses="w-72"
						/>
						<BorderMagicButton 
							text="Schedule a meeting" 
							icon={<FaLocationArrow />} 
							position="right"
							handleClick={launchCalendly}
							otherClasses="w-72"
						/>
					</div>
					<Meteors number={20} />
				</div>
				<div className="relative -top-full h-80">
					<SparklesCore
						background="transparent"
						minSize={0.4}
						maxSize={1}
						particleDensity={100}
						className="w-full h-full"
						particleColor="#FFFFFF"
					/>
				</div>
			</div>
			<div className={`${calendlyVisibility} ${calendlyOpacity} fixed h-[100vh] w-[100vw] top-0 left-0 bg-cardBg bg-opacity-50 z-[5000] transition-all duration-500`}>
				<div id="calendly-embed" className="absolute inset-0 p-4 cal-lg:m-0 cal-md:-mt-16 z-[5000]">
					<InlineWidget 
						url="https://calendly.com/mngatewood/30min?background_color=f9fafb&text_color=000000&primary_color=020617"
						styles={{ colorScheme: "white", height: "100%" }}
						data-resize={true}
					/>
				</div>
				<div 
					className="absolute flex justify-center items-center h-8 w-8 cursor-pointer cal-md:top-[calc(7vw-2rem)] md:top-4 cal-lg:top-8 top-4 right-[5vw] xxs:right-[3.5vw] xs:right-[3vw] sm:right-[calc(4.5vw-1rem)] cal-md:right-[calc(7.5vw-16px)] md:right-[calc(50%-342px)] cal-1032:right-[11vw] cal-lg:right-8 z-[5000]" onClick={closeCalendly}>
					<IconContext.Provider value={{ color: '#38BDF8', size: "1.5rem", className: "bg-black-100 rounded-full" }} >
						<SlClose />
					</IconContext.Provider>
				</div>
			</div>
			<div className="w-full flex justify-between items-end mb-4 xs:text-sm sm:text-base text-[10px]">
				<p className="text-gray-200">Copyright &copy; {new Date().getFullYear()} Michael N. Gatewood</p>
				<div className="flex gap-4">
					<IconContext.Provider value={{ color: '#38BDF8', size: "1rem" }} >
						<a href="mailto:michael@mngatewood.com">
							<MdOutlineMail />
						</a>
						<a href="https://www.linkedin.com/in/mngatewood/" target="_blank" rel="noopener noreferrer">
							<FaLinkedin />
						</a>
						<a href="https://github.com/mngatewood" target="_blank" rel="noopener noreferrer">
							<FaGithub />
						</a>
					</IconContext.Provider>
				</div>
			</div>
		</section>
	)
}
