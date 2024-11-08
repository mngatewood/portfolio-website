import React from 'react'
import Image from 'next/image'
import { experiences } from '../data'
import { Button } from './ui/MovingBorders'
import { ProjectIcon } from './ProjectIcon';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Experience = () => {
	return (
		<section id="experience">
			<h1 className="heading p-8">Professional Experience</h1>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-8 mb-4 ">
				{ experiences.map((job) => (
					<Button 
						key={job.id + "-" + job.companyLink}
						duration={Math.floor(Math.random() * 10000) + 10000}
						borderRadius='1.75rem'
						className="flex-1 p-6 text-white border-neutral-200 dark:border-slate-800 cursor-default"
						style={{
							backgroundImage:
								"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
						}}

					>
						<div className="flex lg:flex-col md:flex-row flex-col justify-center items-start group">
							<div className="flex md:items-start items-center lg:w-full md:w-2/3">
								<a href={job.companyLink} target="_blank" className="flex justify-center items-center absolute top-4 left-4 w-8 h-8 bg-white-100 group-hover:bg-black-100 hover:!bg-slate-600 border-2 border-black group-hover:border-white rounded-full shadow-md shadow-black-100 group-hover:scale-125 hover:!scale-150 transition-transform duration-200">
									<FaExternalLinkAlt className="text-black-100 group-hover:text-white-100 w-4 h-4" />
								</a>
								<Image
									src={job.thumbnail}
									alt={job.title}
									width={200}
									height={200}
									loading="lazy"
									className="lg:w-24 md:w-full md:max-w-36 xs:w-20 w-20 lg:h-24 md:h-full md:max-h-36 xs:h-20 h-20 rounded-3xl aspect-square"
									/>
								<div className="flex flex-col justify-between w-full text-start text-white-100 ms-5">
									<h1 className="text-md xs:text-md md:text-2xl lg:text-xl 2xl:text-2xl font-bold">
										{job.title}
									</h1>
									<div className="flex flex-col justify-between text-xs xs:text-md">
										<p className="mt-3 font-extrabold md:text-lg lg:text-sm 2xl:text-lg">
											{job.company}
										</p>
										<p className="font-semibold min-w-[35%]">
											{job.location}
										</p>
									</div>
								</div>
							</div>
							<p className="text-start text-white-100 md:mt-2 mt-3 font-semibold md:ms-5 md:w-1/3 lg:ms-0 lg:w-full">
								{job.description}
							</p>

							
						</div>
						<div className="flex justify-between w-full mt-3">
							<div className="flex justify-start">
								{ job.iconList.map((icon, index) => (
									<div key={icon} className="border border-white/[0.3] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{
										transform: `translateX(-${index * 8}px)`
									}}>
										<ProjectIcon title={icon} />
									</div>
								))}
							</div>
						</div>
					</Button>
				)) }
			</div>
		</section>
	)
}
