"use client";
import React, { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
	children,
	title,
	href,
	className,
	containerClassName,
}: {
	children: React.ReactNode;
	title?: string;
	href?: string;
	className?: string;
	containerClassName?: string;
}) => {

	const [transform, setTransform] = useState(
		"translate(-50%,-50%) rotateX(0deg)"
	);
	const [isHovering, setIsHovering] = useState(false);

	const toggleTransform = () => {
		if (isHovering) {
			setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
		} else {
			setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
		}
		setIsHovering(!isHovering);
	};

	const onMouseEnter = () => {
		setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
		setIsHovering(true);
	};
	const onMouseLeave = () => {
		setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
		setIsHovering(false);
	};

	const isTouchEvent = (event: MouseEvent | PointerEvent): event is PointerEvent => {
		if ('nativeEvent' in event && 'pointerType' in event.nativeEvent && event.nativeEvent.pointerType === "touch") {
			return true;
		}
		return false;
	};

	const handleClick = (event: MouseEvent | PointerEvent) => {
		const touch = isTouchEvent(event);
		// If the event is a touch event, toggle the transform only
		if (touch) {
			toggleTransform();
		} else {
			// If the event is a mouse or pen event and the element is already in a hover state, then redirect to the link
			if (isHovering && href) {
				// Redirect to the link when the element is clicked
				window.open(href, '_blank');
			// If the event is a mouse or pen event and the element is not in a hover state, then toggle the transform only
			} else {
				toggleTransform();
			}
		}
	};

	return (
		<div
			className={cn(
				"relative group/pin z-40 cursor-pointer",
				containerClassName
			)}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={handleClick}
			// href={href || "/"}
		>
			<div
				style={{
					perspective: "1000px",
					transform: "rotateX(70deg) translateZ(0deg)",
				}}
				className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
			>
				<div
					style={{
						transform: transform,
					}}
					className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[2px_2px_6px] shadow-purple bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
				>
					<div className={cn(" relative z-40 ", className)}>{children}</div>
				</div>
			</div>
			<PinPerspective title={title} href={href} isHovering={isHovering}/>
		</div>
	);
};

export const PinPerspective = ({
	title,
	href,
	isHovering
}: {
	title?: string;
	href?: string;
	isHovering: boolean
}) => {
	return (
		<motion.div className="w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
			<div className=" w-full h-full -mt-7 flex-none inset-0" style={{ visibility: isHovering ? "visible" : "hidden" }}>
				{/* Make this div hidden when hovered = false */}
				<div className="absolute top-0 inset-x-0 flex justify-center">
					<a
						href={href}
						target={"_blank"}
						className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
					>
						<div>
							<span className="relative z-20 text-white text-xs md:text-sm font-bold inline-block py-0.5">
								{title}
							</span>

							<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
						</div>
						<div className="absolute -bottom-5 -left-2 w-full text-xs text-center font-extralight uppercase"><span className="text-nowrap">Click to go to live site</span></div>
					</a>
				</div>

				<div
					style={{
						perspective: "1000px",
						transform: "rotateX(70deg) translateZ(0)",
					}}
					className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
				>
					<>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0,
								x: "-50%",
								y: "-50%",
							}}
							animate={{
								opacity: [0, 1, 0.5, 0],
								scale: 1,

								z: 0,
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								delay: 0,
							}}
							className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
						></motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0,
								x: "-50%",
								y: "-50%",
							}}
							animate={{
								opacity: [0, 1, 0.5, 0],
								scale: 1,

								z: 0,
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								delay: 2,
							}}
							className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
						></motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0,
								x: "-50%",
								y: "-50%",
							}}
							animate={{
								opacity: [0, 1, 0.5, 0],
								scale: 1,

								z: 0,
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								delay: 4,
							}}
							className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
						></motion.div>
					</>
				</div>

				<>
					<motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
					<motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
					<motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
					<motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
				</>
			</div>
		</motion.div>
	);
};
