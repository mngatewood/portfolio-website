"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { TbBrandReact, TbBrandNextjs, TbBrandTailwind, TbBrandTypescript, TbBrandNodejs, TbBrandDocker, TbBrandSvelte, TbBrandFirebase, TbBrandGit, TbBrandGithub, TbBrandPrisma } from "react-icons/tb";
import { SiExpress, SiMeteor, SiPostgresql, SiSqlite, SiPostman, SiMongodb, SiPocketbase, SiPlaywright, SiMocha, SiJira, SiRubyonrails, SiRubysinatra, SiJquery, SiChai, SiGraphql, SiMicrosoftsharepoint, SiMicrosoftword, SiMicrosoftpowerpoint, SiMicrosoftaccess, SiMicrosoftteams, SiMicrosoftexcel, SiWindows, SiMicrosoftexchange, SiCss3, SiHtml5 } from "react-icons/si";
import { TechStackInfiniteCards } from "./TechStackInfiniteCards";
import { BorderMagicButton } from "../ui/BorderMagicButton";
import { FaAws, FaAngular, FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

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

	const toolbox = techStacks.filter((tech) => tech.renderInToolbox);

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
				<div className={`w-full h-full absolute top-0 left-0 ${id === "5" && "bg-cardBg bg-gradient-to-l from-neutral-500 via-transparent to-transparent"}`}>
					{img && <Image
						src={img}
						alt={img}
						className={cn(imgClassName, `object-cover object-center`)}
						loading="lazy"
						fill={true}
						sizes="(max-width: 1024px) 92vw, (max-width: 1360px) 55vw, 754px"
					/>}
				</div>
				<div className={`absolute right-0 -bottom-5`}>
					{spareImg && <Image
						src={spareImg}
						alt={spareImg}
						className={cn(spareImgClassName, "object-cover object-center w-full h-full")}
						loading="lazy"
						fill={true}
						sizes="(max-width: 1024px) 100vw, (max-width: 1360px) 60vw, 780px"
					/>}
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
						<div className="absolute bottom-0 xxs:bottom-4">
							<TechStackInfiniteCards
								items={toolbox}
								direction="left"
								speed="normal"
							/>
						</div>
						<div className="absolute w-full h-full z-30 bottom-0" style={{boxShadow: "10px 0 20px 0 rgb(2, 0, 36) inset, -10px 0 20px 0 rgb(2, 0, 36) inset"}} />
					</>
				)}

				{/* Background grid, gradient and pendulum */}
				{["3", "4", "6"].includes(id) && (
					<div className="absolute top-0 w-full h-full dark:bg-cardBg dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex items-center justify-center">
						{/* Radial gradient for the container to give a faded look */}
						<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-cardBg bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
						<div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
						</div>
					</div>
				)}

				{/* See my resume button */}
				{id === "5" && (
					<div className="flex absolute bottom-3 md:bottom-28 lg:bottom-36 left-4 sm:left-5 md:left-5 lg:left-10 m-0">
						<a href="/resume/" title="See My Resume" className="z-10">
							<BorderMagicButton
								text="View My Resume"
								icon={<CgFileDocument />}
								position="right"
							/>
						</a>
					</div>
				)}

				{id === "7" && (
					<div className="flex justify-center relative m-0">
						<a href="https://www.linkedin.com/in/mngatewood/" title="Connect on LinkedIn" className="z-10">
							<BorderMagicButton
								text={"Connect on LinkedIn"}
								icon={<FaLinkedinIn />}
								position="left"
								otherClasses="!bg-[#161A31] mx-auto mt-0 mb-6"
							/>
						</a>
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
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandNextjs />,
		"title": "Next.js",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandTailwind />,
		"title": "TailwindCSS",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandTypescript />,
		"title": "TypeScript",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandNodejs />,
		"title": "Node.js",
		"renderInToolbox": true,
	}, 
	{
		"icon": <SiExpress />,
		"title": "Express",
		"renderInToolbox": true,
	}, 
	{
		"icon": <SiMongodb />,
		"title": "MongoDB",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandPrisma />,
		"title": "Prism",
		"renderInToolbox": true,
	}, 
	{
		"icon": <SiMeteor />,
		"title": "Meteor.js",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandSvelte />,
		"title": "Svelte",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandDocker />,
		"title": "Docker",
		"renderInToolbox": true,
	}, 
	{
		"icon": <SiSqlite />,
		"title": "SQLite",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandGit />,
		"title": "Git",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandGithub />,
		"title": "GitHub",
		"renderInToolbox": true,
	}, 
	{
		"icon": <TbBrandFirebase />,
		"title": "Firebase",
		"renderInToolbox": true,
	}, 
	{
		"icon": <SiPostgresql />,
		"title": "PostgreSQL",
		"renderInToolbox": true,
	}, 
	{
		"icon": <SiPostman />,
		"title": "Postman",
		"renderInToolbox": true,
	},
	{
		"icon": <SiPocketbase />,
		"title": "Pocketbase",
		"renderInToolbox": true,
	},
	{
		"icon": <SiPlaywright />,
		"title": "Playwright",
		"renderInToolbox": true,
	},
	{
		"icon": <SiMocha />,
		"title": "Mocha",
		"renderInToolbox": true,
	},
	{
		"icon": <FaAws />,
		"title": "AWS",
		"renderInToolbox": true,
	},
	{
		"icon": <SiJira />,
		"title": "Jira",
		"renderInToolbox": false,
	},
	{
		"icon": <FaAngular />,
		"title": "AngularJS",
		"renderInToolbox": true,
	},
	{
		"icon": <SiRubyonrails />,
		"title": "Ruby on Rails",
		"renderInToolbox": true,
	},
	{
		"icon": <SiRubysinatra />,
		"title": "Sinatra",
		"renderInToolbox": true,
	},
	{
		"icon": <SiJquery />,
		"title": "jQuery",
		"renderInToolbox": true,
	},
	{
		"icon": <SiChai />,
		"title": "Chai",
		"renderInToolbox": true,
	},
	{
		"icon": <SiGraphql />,
		"title": "GraphQL",
		"renderInToolbox": false,
	},
	{
		"icon": <SiMicrosoftteams />,
		"title": "Microsoft Teams",
		"renderInToolbox": false,
	},
	{
		"icon": <SiMicrosoftaccess />,
		"title": "Microsoft Access",
		"renderInToolbox": false,
	},
	{
		"icon": <SiMicrosoftexcel />,
		"title": "Microsoft Excel",
		"renderInToolbox": false,
	},
	{
		"icon": <SiMicrosoftpowerpoint />,
		"title": "Microsoft Powerpoint",
		"renderInToolbox": false,
	},
	{
		"icon": <SiMicrosoftword />,
		"title": "Microsoft Word",
		"renderInToolbox": false,
	},
	{
		"icon": <SiMicrosoftsharepoint />,
		"title": "Microsoft SharePoint",
		"renderInToolbox": false,
	},
	{
		"icon": <SiHtml5 />,
		"title": "HTML",
		"renderInToolbox": true,
	},
	{
		"icon": <SiCss3 />,
		"title": "CSS",
		"renderInToolbox": true,
	},
	{
		"icon": <SiWindows />,
		"title": "Windows Server",
		"renderInToolbox": false,
	},
	{
		"icon": <SiMicrosoftexchange />,
		"title": "Microsoft Exchange",
		"renderInToolbox": false,
	},
]