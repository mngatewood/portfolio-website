"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";

export const TechStackInfiniteCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		title: string;
		icon: JSX.Element;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 overflow-hidden",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item, idx) => (
					<li
						className="relative rounded-2xl border flex-shrink-0 border-slate-700 w-20 h-20"
						style={{
							background:
								"linear-gradient(180deg, var(--slate-800), var(--slate-900)",
						}}
						key={item.title}
					>
						<div
							aria-hidden="true"
							className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
						></div>
						{/* <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
							{item.quote}
						</span> */}
						<div className="relative h-full z-20">
							<div className="flex flex-col justify-center items-center h-full gap-1">
								<div className="text-xs leading-[1.6] text-gray-400 font-normal">
									<IconContext.Provider value={{ size: '2rem' }}>
										{item.icon}
									</IconContext.Provider>
								</div>
								<div className="text-xs leading-[1.6] text-gray-400 font-normal">
									<IconContext.Provider value={{ size: '70px' }}>
										{item.title}
									</IconContext.Provider>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
