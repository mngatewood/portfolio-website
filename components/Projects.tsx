"use client"
import React, { useState, useMemo } from 'react'; 
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { projects } from '@/data';
import { ProjectIcon } from './ProjectIcon';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const PinContainer = dynamic(() => import('./ui/PinContainer').then(module => module.PinContainer), { ssr: false });

export const Projects = () => {

	const [expandProjects, setExpandProjects] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const color = isHovered ? "#000000" : "#38BDF8";

	const sortedProjects = useMemo(() => {
		return [...projects].sort((a, b) => Number(b.id) - Number(a.id));
	}, []);

	const toggleExpand = () => {
		const element = document.getElementById('projects');
		if (element && expandProjects) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setExpandProjects(!expandProjects);
	};

	return (
		<section id="projects">
			<h1 className="heading py-12">Project Spotlight</h1>
			<div className={`${expandProjects ? 'max-h-[9999px]' : 'max-h-[1600px] md:max-h-[1700px] lg:max-h-[1140px] overflow-hidden bg-gradient-to-t from-slate-950'} flex flex-wrap items-center justify-center lg:gap-x-24 lg:gap-y-0 4xl:gap-x-24 md:gap-y-8 gap-y-0 lg:mt-8 mb-8  my-4`}>
				{sortedProjects.map(({ id, title, description, img, link, linkTitle, iconList, repo }) => (
					<div key={id} className="lg:h-[32rem] 4xl:h-[48rem] lg:mb-16 flex flex-col items-center justify-center">
						{
							linkTitle && link
						?
							<PinContainer title={linkTitle} href={link}>
								<div className="relative flex items-center justify-center md:max-w-[570px] lg:w-[40vw] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
									<div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
										<Image 
											src="/bg.png" 
											alt="bg-img"
											loading="lazy"
											fill={true}
											sizes="(max-width: 1024px) 100vw, (max-width: 1360px) 50vw, 780px"
										/>
									</div>
									<Image 
										src={img} 
										alt={title} 
										className="z-10 absolute h-[90%] object-contain"
										loading="lazy"
										width={460}
										height={300}
										sizes="(max-width: 1024px) 100vw, (max-width: 1360px) 50vw, 780px"
									/>
								</div>
								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
									{title}
								</h1>
								<div className="lg:text-xl lg:font-normal lg:min-h-14 font-light text-sm line-clam-2">
									<div dangerouslySetInnerHTML={{ __html: description }}></div>
								</div>
							</ PinContainer>
						:
							<div className="relative group/pin z-40 h-[320px]" title="Preview Not Available">
								<div className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2" style={{perspective:"1000px"}}>
									<div className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[2px_2px_6px] shadow-purple bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden" style={{transform:"translate(-50%,-50%) rotateX(0deg) scale(1)"}}>
										<div className="relative z-40">
											<div className="relative flex items-center justify-center md:max-w-[570px] lg:w-[40vw] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
												<div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
													<Image
														src="/bg.png"
														alt="bg-img"
														loading="lazy"
														fill={true}
														sizes="(max-width: 1024px) 100vw, (max-width: 1360px) 50vw, 780px"
													/>
												</div>
												<Image
													src={img}
													alt={title}
													className="z-10 absolute h-[90%] object-contain"
													loading="lazy"
													width={460}
													height={300}
													sizes="(max-width: 1024px) 100vw, (max-width: 1360px) 50vw, 780px"
												/>
											</div>
											<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
												{title}
											</h1>
											<div className="lg:text-xl lg:font-normal lg:min-h-14 font-light text-sm line-clamp-2">
												<div dangerouslySetInnerHTML={{ __html: description }}></div>
											</div>

										</div>
									</div>
								</div>
							</div>
						}
						<div className="relative top-0 xxs:-top-0 md:-top-0 lg:top-16 42xl:top-48 flex items-center justify-between md:max-w-[570px] lg:w-[40vw] w-[80vw] mt-7 mb-3 z-40">
							<div className="flex items-center">
								{iconList.map((icon, index) => (
									<div key={icon} className="border border-white/[0.3] rounded-full bg-black hover:bg-purple lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{
										transform: `translateX(-${index * 8}px)`
									}}>
										<ProjectIcon title={icon} />
									</div>
								))}
							</div>
							<IconContext.Provider value={{ className: "bg-black-100 group-hover:bg-purple group-hover:text-black-100" }} >
								<a href={repo} target="_blank" className="group">
									<button className="flex justify-center items-center px-3 py-2 rounded-md font-bold transition duration-200 bg-black-100 text-purple group-hover:bg-purple group-hover:text-black-100 group-hover:border-teal-500 border border-white/[0.3]">
											<FaGithub className="rounded-full" />
											<p className="hidden xs:flex lg:text-lg md:text-xs text-sm ml-2">Repository</p>
											{/* <FaLocationArrow className="ms-3"  /> */}
									</button>
								</a>
							</IconContext.Provider>
						</div>
					</div>
				))}
			</div>
			<div onClick={toggleExpand} className="w-full relative -top-4 sm:-top-6 md:-top-10 z-[100] bg-black-100 cursor-pointer">
				<hr className="my-4 border-2 border-purple rounded-md" />
				<div 
					onMouseOver={() => setIsHovered(true)} 
					onMouseOut={() => setIsHovered(false)}
					onClick={() => setIsHovered(false)}
					className="group w-12 h-12 mx-auto flex justify-center items-center border border-purple bg-black-100 hover:bg-purple rounded-full text-4xl relative -top-10">
					<IconContext.Provider value={{ color: color, size: "1.5rem" }} >
						{expandProjects ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
					</IconContext.Provider>
				</div>
				<div 
					className="text-center -mt-8 w-full text-purple transition duration-200"
					style={{ opacity: isHovered ? 1 : 0 }}
				>
					{ expandProjects ? "See Less" : "See More" }
				</div>
			</div>
		</ section>
	)
}
