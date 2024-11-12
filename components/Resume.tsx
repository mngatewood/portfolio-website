"use client"
import React, { useState } from 'react'
import { PiGlobeSimple } from 'react-icons/pi'
import { MdOutlineEmail } from 'react-icons/md'
import { PiLinkedinLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaFilePdf } from "react-icons/fa";

export const Resume = () => {
	const [expandResume, setExpandResume] = useState(false);

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
					<p className="text-2xl font-bold">Michael N. Gatewood<span className="text-0"> - </span></p>
					<p className="text-lg">Software Engineer</p>
				</div>
				<div className="mt-4">
					<h2 className="mb-4 underline text-lg font-bold font-trebuchet">Experience</h2>
					<div className="mb-4">
						<div className="flex md:flex-row flex-col justify-between font-bold">
							<h3>Software Development Technical Lead<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">Coin Cloud, Inc.</h3>
						</div>
						<div className="flex md:flex-row flex-col-reverse justify-between mb-4">
							<h3>August 2019 – October 2022<span className="text-0">; </span></h3>
							<h3 className="md:text-right text-left">Las Vegas, Nevada</h3>
						</div>
						<p className="text-justify"> Designed and implemented software solutions that integrated across multiple applications within a complex technology stack.  Managed a team of developers to deliver quality products on time and within scope. Worked closely with a cross-functional Product team to assess project feasibility, define technical specifications, and establish project timelines and milestones.</p>
					</div>
					<div className="mb-4">
						<div className="flex md:flex-row flex-col justify-between font-bold">
							<h3>Human Resources Manager<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">United States Army</h3>
						</div>
						<div className="flex md:flex-row flex-col-reverse justify-between mb-4">
							<h3>March 2008 – November 2017<span className="text-0">; </span></h3>
							<h3 className="md:text-right text-left">Fort Carson, Colorado</h3>
						</div>
						<p className="text-justify">Trained, supervised, and mentored staff in oversight and management of postal operations and personnel accountability for the entire U.S. Central Command at Camp Arifjan, Kuwait. Provided direction and support to subordinate postal and accountability teams of more than 300 personnel and reported daily status to Brigade and Theater command staff.</p>
					</div>
					<div className="mb-4">
						<div className="flex md:flex-row flex-col justify-between font-bold">
							<h3>Technical Consultant (Volunteer)<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">Saint Therese Center</h3>
						</div>
						<div className="flex md:flex-row flex-col-reverse justify-between mb-4">
							<h3>February 2012 – December 2015<span className="text-0">; </span></h3>
							<h3 className="md:text-right text-left">Henderson, Nevada</h3>
						</div>
						<p className="text-justify">Developed a responsive e-commerce website for marketing campaigns and processing donations. Established, installed, and maintained an organizational standard for software, hardware and telephony, including a corporate network and server. Installed and monitored security camera system. Provided desktop support to staff and volunteers.</p>
					</div>
				</div>
				<div className="mt-4">
					<h2 className="mb-4 underline text-lg font-bold font-trebuchet">Education</h2>
					<div className="mb-4">
						<div className="flex md:flex-row flex-col justify-between font-bold">
							<h3>Front-End and Back-End Engineering<span className="text-0"> - </span></h3>
							<h3 className="md:text-right text-left">Turing School of Software and Design</h3>
						</div>
						<div className="flex md:flex-row flex-col-reverse justify-between mb-4">
							<h3>November 2017 – February 2019<span className="text-0">; </span></h3>
							<h3 className="md:text-right text-left">Denver, Colorado</h3>
						</div>
						<p className="text-justify">Applied fundamental software engineering principles and best practices in an intense course of study spanning more than fourteen months.  First student ever to be inducted into the '14er' club by graduating from both Front-End and Back-End Engineering programs.</p>
					</div>
				</div>
				<div className="mt-4">
					<div className="flex lg:flex-row flex-col justify-between text-xs md:text-sm min-[790px]:text-base lg:text-sm xl:text-lg">
						<div className="lg:w-2/3 w-full mb-4 lg:mb-0">
							<h2 className="mb-4 underline text-lg font-bold font-trebuchet">Technical Skills</h2>
							<ul>
								<li className="text-justify xs:hidden">TypeScript | JavaScript | React | Next | Svelte | Meteor | Angular | Node | Express | Knex | Firebase | Mocha | Chai | Jest | Playwright | MongoDB | SQL | PostgreSQL | MySQL | GraphQL | Docker | AWS | Ruby on Rails | Sinatra | Postman | Git | GitHub | Jira | Confluence</li>
								<li className="[text-align-last:justify] hidden xs:block">TypeScript | JavaScript | React | Next | Svelte | Meteor | Angular</li>
								<li className="[text-align-last:justify] hidden xs:block">Node | Express | Knex | Firebase | Mocha | Chai | Jest | Playwright</li>
								<li className="[text-align-last:justify] hidden xs:block">MongoDB | SQL | PostgreSQL | MySQL | GraphQL | Docker | AWS</li>
								<li className="[text-align-last:justify] hidden xs:block">Ruby on Rails | Sinatra | Postman | Git | Github | Jira | Confluence</li>
							</ul>
						</div>
						<div className="lg:w-auto w-full">
							<h2 className="mb-4 underline text-lg font-bold font-trebuchet">Contact</h2>
							<ul>
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
			<div onClick={toggleExpand}className="w-full relative -top-4 sm:-top-6 md:-top-10 cursor-pointer">
				<hr className="my-4 border-2 border-gray-400 rounded-md" />
				<div className="w-12 h-12 mx-auto flex justify-center items-center border border-gray-400 bg-black-100 rounded-full text-4xl relative -top-10">
					{ expandResume ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
				</div>
			</div>
		</section>
  )
}
