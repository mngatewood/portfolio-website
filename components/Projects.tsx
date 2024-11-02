"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { projects } from '@/data';
import { ProjectIcon } from './ProjectIcon';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const PinContainer = dynamic(() => import('./ui/PinContainer').then(module => module.PinContainer), { ssr: false });

export const Projects = () => {
	return (
		<section id="projects">
			<h1 className="heading py-12">Project Spotlight</h1>
			<div className="flex flex-wrap items-center justify-center lg:gap-x-24 lg:gap-y-0 2xl:gap-x-24 md:gap-y-8 gap-y-0 lg:mt-8 mb-8  my-4">
				{ projects.map(({ id, title, description, img, link, linkTitle, iconList, repo }) => (
					<div key={id} className="lg:h-[32rem] 2xl:h-[48rem] lg:mb-16 flex flex-col items-center justify-center">
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
									className="z-10 absolute bottom-0 h-[90%] object-contain"
									loading="lazy"
									width={460}
									height={300}
									sizes="(max-width: 1024px) 100vw, (max-width: 1360px) 50vw, 780px"
								/>
							</div>
							<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
								{title}
							</h1>
							<p className="lg:text-xl lg:font-normal lg:min-h-14 font-light text-sm line-clamp-2">
								{description}
							</p>
						</ PinContainer>
						<div className="relative top-0 xxs:-top-0 md:-top-0 lg:top-16 2xl:top-48 flex items-center justify-between md:max-w-[570px] lg:w-[40vw] w-[80vw] mt-7 mb-3 z-40">
							<div className="flex items-center">
								{iconList.map((icon, index) => (
									<div key={icon} className="border border-white/[0.3] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{
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
											<p className="flex lg:text-lg md:text-xs text-sm ml-2">Repository</p>
											{/* <FaLocationArrow className="ms-3"  /> */}
									</button>
								</a>
							</IconContext.Provider>
						</div>
					</div>
				))}
			</div>
		</ section>
	)
}
