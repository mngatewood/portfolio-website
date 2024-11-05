"use client"
import React, { useEffect, useState } from 'react'
import { techStacks } from './ui/BentoGrid';
import { IconContext } from "react-icons";

export const ProjectIcon = ({title}: {title: string}) => {

	const [iconElement, setIconElement] = useState<React.JSX.Element | null>(null);

	useEffect(() => {
		const icon = techStacks.find((tech) => tech.title === title);
		setIconElement(() => icon?.icon ?? null);
	}, [title]);

	return (
		<IconContext.Provider value={{ color: '#38BDF8', size: "1.5rem" }} >
			<div className="group">
				{iconElement}
				<div className='absolute -top-16 px-4 py-2 bg-black-100 rounded-md text-purple border-gray-500 border left-0 text-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform scale-0 group-hover:scale-100'>
					<span className="whitespace-nowrap">{title}</span>
					<span className="h-0 w-0 absolute -bottom-2 left-2 lg:left-3 border-x-8 border-x-transparent border-t-8 border-t-gray-500"></span>
				</div>
			</div>
		</IconContext.Provider>
	)
}
