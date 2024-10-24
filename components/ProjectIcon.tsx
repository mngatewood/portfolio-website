"use client"
import React, { useEffect, useState } from 'react'
import { techStacks } from './ui/BentoGrid';
import { IconContext } from "react-icons";

export const ProjectIcon = ({title}: {title: string}) => {

	const [iconElement, setIconElement] = useState<React.JSX.Element | null>(null);

	useEffect(() => {
		const icon = techStacks.find((tech) => tech.title === title);
		setIconElement(() => icon?.icon ?? null);
	}, []);

	return (
		<IconContext.Provider value={{ color: '#38BDF8', size: "1.5rem" }} >
			{iconElement}
		</IconContext.Provider>
	)
}
