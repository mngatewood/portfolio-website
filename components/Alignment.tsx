"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { alignment } from "@/data";


export function Alignment() {
	return (
		<section id="alignment">
			<h1 className="heading py-8">Cultural Alignment</h1>
			<div className="flex flex-col lg:flex-row items-center justify-between gap-16 mx-auto py-8 my-4 ">
				{ alignment.map((item) => (
					<Card 
						key={item.id}
						list={item.list} 
						title={<AlignmentTitle text={item.title} />}>
						<CanvasRevealEffect
							animationSpeed={item.animationSpeed}
							containerClassName={item.containerClassName}
							colors={item.colors}
						/>
					</Card>
				))}
			</div>
		</section>
	);
}

const Card = ({
	title,
	list,
	children,
}: {
	title: React.ReactNode;
	list: string[];
	children?: React.ReactNode;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border border-black/[0.2] group/canvas-card bg-cardBg lg:h-[48rem] h-[30rem] flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative"
			style={{
				backgroundImage:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>


			<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20 h-full">
				<div className="absolute h-full text-center text-base group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
					{title}
				</div>
				<ul className="flex flex-col justify-evenly h-full py-4 sm:pl-8 pl-4 sm:text-sm md:text-xl text-xs opacity-10 group-hover/canvas-card:opacity-100 relative z-10 list-disc font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
					{list.map((item, index) => (
						<li key={index} className="my-2">{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const AlignmentTitle = ({text}: {text: string}) => {
	return (
		<button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] md:px-6 px-3 xxs:text-xs xs:text-sm sm:text-base md:text-2xl lg:text-lg xl:text-2xl text-xs font-medium text-slate-200 shadow-[1px_1px_4px__rgba(0,0,0,0.2)] shadow-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
			{text}
		</button>
	);
};

export const Icon = ({ className, ...rest }: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={className}
			{...rest}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
		</svg>
	);
};
