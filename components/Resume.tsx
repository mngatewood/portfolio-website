"use client"
import React, { useState } from 'react'
import { PiGlobeSimple } from 'react-icons/pi'
import { MdOutlineEmail } from 'react-icons/md'
import { PiLinkedinLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaFilePdf } from "react-icons/fa";
import { TiPhone } from 'react-icons/ti';
import { IconContext } from 'react-icons';

export const Resume = () => {
	const [expandResume, setExpandResume] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const color = isHovered ? "#000000" : "#38BDF8";

	const toggleExpand = () => {
		const element = document.getElementById('resume');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setExpandResume(!expandResume);
	};

	return (
		<section id="resume">
			<h1 className="heading p-8">R&#233;sum&#233;</h1>
			<div className="relative sm:w-14 w-12 sm:h-14 h-12 -my-4 top-3 sm:top-10 md:top-14 -right-[calc(50%-1.5rem)] sm:-right-[calc(100%-3.5rem)] md:-right-[calc(100%-5rem)] cursor-pointer text-purple bg-black-100 hover:text-black-100 hover:bg-purple hover:scale-110 border shadow-md shadow-black-100 border-white rounded-full flex justify-center items-center transition-all duration-200 ">
				<FaFilePdf className="text-3xl" onClick={() => window.open("/Michael_N_Gatewood_Resume.pdf", "_blank")} />
			</div>
			<div className={`${expandResume ? 'max-h-[9999px]' : 'max-h-56 overflow-hidden bg-gradient-to-t from-slate-950'} px-4 py-8 sm:p-10 md:p-20 sm:m-5 m-0 md:m-10 bg-gray-100 text-black-100 transition-max-height duration-1000 ease-in-out`}>
				<div className="flex md:flex-row flex-col justify-between items-center w-full mb-4 font-trebuchet">
					<p className="text-2xl font-bold text-center xxs:text-left">Michael N. Gatewood<span className="text-0"> - </span></p>
					<p className="text-2xl text-center xxs:text-left">Software Engineer</p>
				</div>
				<p className="xxs:text-justify">Dedicated, results-driven engineer with expertise in front-end and back-end development. An analytical problem-solver with an emphasis on quality and a can-do attitude. Known for accomplishing goals in a fast-paced, deadline-driven environment.</p>
				<div className="mt-4">
					<h2 className="mb-4 underline text-lg font-bold font-trebuchet text-center">Experience</h2>
					<div className="mb-4">
						<div className="flex md:flex-row flex-col justify-between">
							<h3 className="font-bold">Coin Cloud, Inc.</h3>
							<h3 className="md:text-right text-left">Las Vegas, Nevada</h3>
						</div>
						<hr />
						<div className="flex md:flex-row flex-col justify-between my-2 ml-3">
							<h3 className="font-bold">Software Development Technical Lead<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">March 2022 - October 2022</h3>
						</div>
						<p className="xxs:text-justify ml-3">Designed and implemented software solutions that integrated across multiple applications within a complex technology stack, including Angular, AWS, Serverless, MongoDB and Docker. Led a team of developers to deliver quality products on time and within scope and collaborated closely with a cross-functional Product team to assess project feasibility, define technical specifications and establish project timelines and milestones that drove business success.</p>
						<div className="flex md:flex-row flex-col justify-between my-2 ml-3">
							<h3 className="font-bold">Software Development Manager<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">June 2020 - March 2022</h3>
						</div>
						<p className="xxs:text-justify ml-3">Led a team of 5-8 software engineers, providing technical leadership and guidance to ensure successful project execution and delivery of high-quality software solutions that met business objectives and increased customer satisfaction. Coordinated with stakeholders to define project requirements, developed and managed project plans and ensured timely delivery of high-quality software solutions that drove business growth and customer engagement.</p>
						<div className="flex md:flex-row flex-col justify-between my-2 ml-3">
							<h3 className="font-bold">Senior Software Engineer<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">February 2020 - June 2020</h3>
						</div>
						<p className="xxs:text-justify ml-3">Championed the development of complex software projects, providing technical guidance and oversight to junior engineers and collaborating with cross-functional teams to drive project success. Leveraged expertise in software design, development and testing to deliver high-quality solutions that met business objectives and exceeded customer expectations.</p>
						<div className="flex md:flex-row flex-col justify-between my-2 ml-3">
							<h3 className="font-bold">Junior Full Stack Engineer<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">August 2019 - February 2020</h3>
						</div>
						<p className="xxs:text-justify ml-3">Boosted company productivity by designing and deploying custom features for in-house enterprise software, leveraging Meteor, MongoDB, CoffeeScript and Jade/Pug. Crafted sophisticated data aggregations to ensure seamless performance and scalability and designed intuitive, reactive interfaces that transformed the user experience and empowered users to excel in their roles.</p>
					</div>
					<div className="mb-4">
						<div className="flex md:flex-row flex-col justify-between">
							<h3 className="font-bold">United States Army</h3>
							<h3 className="md:text-right text-left">Fort Carson, Colorado</h3>
						</div>
						<hr />
						<div className="flex md:flex-row flex-col justify-between my-2 ml-3">
							<h3 className="font-bold">Human Resources Manager<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">March 2008 – November 2017</h3>
						</div>
						<p className="xxs:text-justify ml-3">Trained, supervised, and mentored staff in oversight and management of postal operations and personnel accountability for the entire U.S. Central Command at Camp Arifjan, Kuwait. Provided direction and support to subordinate postal and accountability teams of more than 300 personnel and reported daily status to Brigade and Theater command staff.</p>
					</div>
				</div>
				<div className="mt-4">
					<h2 className="mb-4 underline text-lg font-bold font-trebuchet text-center">Education</h2>
					<div className="mb-4">
						<div className="flex md:flex-row flex-col justify-between">
							<h3 className="font-bold">Turing School of Software and Design</h3>
							<h3 className="md:text-right text-left">Denver, Colorado</h3>
						</div>
						<hr />
						<div className="flex md:flex-row flex-col justify-between mt-2 ml-3">
							<h3 className="font-bold">Front-End Engineering<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">November 2017 – August 2018</h3>
						</div>
						<div className="flex md:flex-row flex-col justify-between mb-2 ml-3">
							<h3 className="font-bold">Back-End Engineering<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">August 2018 – February 2019</h3>
						</div>
						<p className="xxs:text-justify ml-3">Applied fundamental software engineering principles and best practices in an intense course of study spanning more than fourteen months.  First student ever to be inducted into the &apos;14er&apos; club by graduating from both Front-End and Back-End Engineering programs.</p>
					</div>
				</div>
				<div className="mt-4">
					<div className="flex lg:flex-row flex-col justify-between text-xs md:text-sm min-[790px]:text-base lg:text-sm xl:text-lg">
						<div className="lg:w-2/3 w-full mb-4 lg:mb-0">
							<h2 className="mb-4 underline text-lg font-bold font-trebuchet text-center">Technical Skills</h2>
							<div className="flex flex-col w-full">
								<div className="flex w-full mb-2 xl:mb-3 mt-1">
									<h3 className="font-bold shrink-0 flex items-center w-20 md:w-24 lg:w-20 xl:w-28">Fluent:</h3>
									<p className="lg:min-w-[412px]">JavaScript, React, Next, Svelte, Meteor, MongoDB, Git, GitHub</p>
								</div>
								<div className="flex w-full mb-2 xl:mb-3">
									<h3 className="font-bold shrink-0 flex items-center w-20 md:w-24 lg:w-20 xl:w-28">Proficient:</h3>
									<p className="lg:min-w-[412px]">TypeScript, Node, Express, Mocha, Chai, Ruby on Rails, Sinatra, Postman, PostgreSQL, MySQL, Playwright, Jira, Confluence</p>
								</div>
								<div className="flex w-full mb-2 xl:mb-3">
									<h3 className="font-bold shrink-0 flex items-center w-20 md:w-24 lg:w-20 xl:w-28">Familiar:</h3>
									<p className="lg:min-w-[412px]">Angular, SQL, GraphQL, Docker, AWS, Knex, Firebase, Jest</p>
								</div>
							</div>
						</div>
						<div className="lg:w-auto w-full">
							<h2 className="mb-4 underline text-lg font-bold font-trebuchet text-center">Contact</h2>
							<ul className="w-[185px] md:w-[230px] m-auto lg:w-auto">
								<li className="flex justify-start items-center gap-2">
									<div className="scale-x-[-1]">
										<TiPhone />
									</div>
									<p>
										(702) 728-1848
									</p>
								</li>
								<li className="flex justify-start items-center gap-2">
									<div>
										<PiGlobeSimple />
									</div>
									<a href="https://www.mngatewood.com" target="_blank">
										www.mngatewood.com
									</a>
								</li>
								<li className="flex justify-start items-center gap-2">
									<div>
										<MdOutlineEmail />
									</div>
									<a href="mailto:michael@mngatewood.com" target="_blank">
										michael@mngatewood.com
									</a>
								</li>
								<li className="flex justify-start items-center gap-2">
									<div>
										<PiLinkedinLogo />
									</div>
									<a href="https://linkedin.com/in/mngatewood" target="_blank">
										linkedin.com/in/mngatewood
									</a>
								</li>
								<li className="flex justify-start items-center gap-2">
									<div>
										<FaGithub />
									</div>
									<a href="https://github.com/mngatewood" target="_blank">
										github.com/mngatewood
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div onClick={toggleExpand} className="w-full relative -top-4 sm:-top-6 md:-top-10 cursor-pointer">
				<hr className="my-4 border-2 border-purple rounded-md" />
				<div 
					onMouseOver={() => setIsHovered(true)}
					onMouseOut={() => setIsHovered(false)}
					onClick={() => setIsHovered(false)}
					className="w-12 h-12 mx-auto flex justify-center items-center border border-purple bg-black-100 hover:bg-purple rounded-full text-4xl relative -top-10"
				>
					<IconContext.Provider value={{ color: color, size: "1.5rem" }} >
						{ expandResume ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
					</IconContext.Provider>
				</div>
				<div
					className="text-center -mt-8 w-full text-purple transition duration-200"
					style={{ opacity: isHovered ? 1 : 0 }}
				>
					{expandResume ? "See Less" : "See More"}
				</div>
			</div>
		</section>
  )
}
