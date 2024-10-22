import React from 'react'
import { cn } from "@/lib/utils";

export const BorderMagicButton = ({text, icon, position, handleClick, otherClasses}: {text: string, icon?: React.ReactNode, position?: string, handleClick?: () => void, otherClasses?: string}) => {
	return (
		<button onClick={handleClick} className={cn(
			"relative inline-flex w-full max-w-48 h-12 overflow-hidden rounded-lg p-[1px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
			otherClasses
		)}>
			<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
			<span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
				{position == "left" && icon}
				{text}
				{position == "right" && icon}
			</span>
		</button>
	)
}
