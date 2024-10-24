"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { TbBrandReact, TbBrandNextjs, TbBrandTailwind, TbBrandTypescript, TbBrandNodejs, TbBrandDocker, TbBrandSvelte, TbBrandFirebase, TbBrandGit, TbBrandGithub, TbBrandPrisma } from "react-icons/tb";
import { SiExpress, SiMeteor, SiPostgresql, SiSqlite, SiPostman, SiMongodb, SiPocketbase, SiPlaywright, SiMocha } from "react-icons/si";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { BorderMagicButton } from "../ui/BorderMagicButton";
import animationData from "@/data/confetti.json";
import { Pendulum } from "./Pendulum";
import { FaLocationArrow } from "react-icons/fa";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	id,
	img,
	imgClassName,
	titleClassName,
	spareImg,
	spareImgClassName,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	id: string;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
	spareImgClassName?: string;
}) => {

	const [copied, setCopied] = useState(false);

	const defaultOptions = {
		loop: copied,
		autoplay: copied,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleCopy = () => {
		const text = "michael@mngatewood.com";
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	return (
		<div
			id={id}
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] bg-cardBg",
				className,
			)}
			style={{
				backgroundImage:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>

			<div className={`${id === "7" && "flex flex-col justify-center"} 
				${id === "3" && "mb-4"} 
				${id === "5" && "mb-12"}
				h-full`}>

				{/* Images */}
				<div className={`w-full h-full absolute top-0 left-0 ${id === "5" && "bg-gradient-to-l from-neutral-500 via-transparent to-transparent"}`}>
					<img
						src={img}
						alt={img}
						className={cn(imgClassName, `object-cover object-center`)}
					/>
				</div>
				<div className={`absolute right-0 -bottom-5`}>
					{spareImg &&
						<img
							src={spareImg}
							alt={spareImg}
							className={cn(spareImgClassName, "object-cover object-center w-full h-full")}
						/>					
					}
				</div>

				{/* Background gradient animation */}
				{id === "7" && (
					<BackgroundGradientAnimation />
				)}

				{/* Title and description */}
				<div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10 z-10")}>
					<div className={`${id !== "7" && "max-w-96"} font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-lg z-10`}>
						{description}
					</div>
					<div className={`${id !== "7" && "max-w-96"} font-sans font-bold text-lg lg:text-3xl z-10`}>
						{title}
					</div>
				</div>


				{/* Infinite moving cards */}
				{id === "2" && (
					<>
						<div className="absolute bottom-0 xs:bottom-4">
							<InfiniteMovingCards
								items={techStacks}
								direction="left"
								speed="normal"
							/>
						</div>
						<div className="absolute w-full h-full z-20 bottom-0" style={{boxShadow: "10px 0 20px 0 rgb(2, 0, 36) inset, -10px 0 20px 0 rgb(2, 0, 36) inset"}} />
					</>
				)}

				{/* Background dots, gradient and pendulum */}
				{id === "3" && (
					<>
						<div className="absolute top-0 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center">
							{/* Radial gradient for the container to give a faded look */}
							<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-cardBg bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
							<div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
							</div>
						</div>
						<Pendulum />
					</>
				)}

				{/* Background grid, gradient and pendulum */}
				{["4", "6"].includes(id) && (
					<div className="absolute top-0 w-full h-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex items-center justify-center">
						{/* Radial gradient for the container to give a faded look */}
						<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-cardBg bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
						<div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
						</div>
					</div>
				)}

				{/* See my resume button */}
				{id === "5" && (
					<div className="flex absolute bottom-0 sm:bottom-0 md:bottom-24 lg:bottom-28 left-4 sm:left-5 md:left-5 lg:left-10 m-0">
						<a href="/resume/" title="See My Resume" className="z-10">
							<BorderMagicButton
								text="See My Resume"
								icon={<FaLocationArrow />}
								position="right"
							/>
						</a>
					</div>
				)}

				{id === "7" && (
					<div className="flex relative m-0">

						{/* Confetti animation */}
						<div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
							<Lottie options={defaultOptions} height={200} width={400} />
						</div>

						<BorderMagicButton
							text={copied ? "Email is Copied!" : "Copy my email address"}
							icon={<IoCopyOutline />}
							position="left"
							handleClick={handleCopy}
							otherClasses="!bg-[#161A31] mx-auto mt-0 mb-6"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

// Exported here for benefit of tsx file
export const techStacks = [ 
	{
		"icon": <TbBrandReact />,
		"title": "React",
	}, 
	{
		"icon": <TbBrandNextjs />,
		"title": "Next.js",
	}, 
	{
		"icon": <TbBrandTailwind />,
		"title": "TailwindCSS",
	}, 
	{
		"icon": <TbBrandTypescript />,
		"title": "TypeScript",
	}, 
	{
		"icon": <TbBrandNodejs />,
		"title": "Node.js",
	}, 
	{
		"icon": <SiExpress />,
		"title": "Express",
	}, 
	{
		"icon": <SiMongodb />,
		"title": "MongoDB",
	}, 
	{
		"icon": <TbBrandPrisma />,
		"title": "Prism",
	}, 
	{
		"icon": <SiMeteor />,
		"title": "Meteor.js",
	}, 
	{
		"icon": <TbBrandSvelte />,
		"title": "Svelte",
	}, 
	{
		"icon": <TbBrandDocker />,
		"title": "Docker",
	}, 
	{
		"icon": <SiSqlite />,
		"title": "SQLite",
	}, 
	{
		"icon": <TbBrandGit />,
		"title": "Git",
	}, 
	{
		"icon": <TbBrandGithub />,
		"title": "GitHub",
	}, 
	{
		"icon": <TbBrandFirebase />,
		"title": "Firebase",
	}, 
	{
		"icon": <SiPostgresql />,
		"title": "PostgreSQL",
	}, 
	{
		"icon": <SiPostman />,
		"title": "Postman",
	},
	{
		"icon": <SiPocketbase />,
		"title": "Pocketbase",
	},
	{
		"icon": <SiPlaywright />,
		"title": "Playwright",
	},
	{
		"icon": <SiMocha />,
		"title": "Mocha",
	},
]