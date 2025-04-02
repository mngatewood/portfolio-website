"use client"
import { useEffect, useState } from 'react';

export const Meteors = ({ number = 20 }: { number?: number }) => {
	const [mounted, setMounted] = useState(false);
	const [meteorStyles, setMeteorStyles] = useState<Array<{ top: number, left: number, delay: number, duration: number }>>([]);

  useEffect(() => {
	// Generate meteor styles only after mounting
	const styles = Array.from({ length: number }, () => ({
		top: -Math.floor(Math.random() * 200),
		left: 0,
		delay: Math.random(),
		duration: Math.random() * 2 + 4
	}));
	setMeteorStyles(styles);
	setMounted(true);
  }, [number]);

  // Don't render anything on server-side
  if (!mounted) {
	return null;
  }

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{meteorStyles.map((style, idx) => (
				<span
					key={idx}
					className="animate-meteor absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
					style={{
						top: `${style.top}px`,
						left: `${style.left}px`,
						animationDelay: `${style.delay}s`,
						animationDuration: `${style.duration}s`
					}}
				/>
			))}
		</div>
	);
};