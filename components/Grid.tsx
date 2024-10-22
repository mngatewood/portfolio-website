import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

export const Grid = () => {

	const items = gridItems.sort((a, b) =>  a.id.localeCompare(b.id ));

	return (
		<section id="about">
			<BentoGrid className="w-full py-20">
				{
					items.map(({ id, title, description, className, imgClassName, titleClassName, img, spareImg }) => (
						<BentoGridItem 
							id={id}
							key={id}
							title={title}
							description={description}
							className={className}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							img={img}
							spareImg={spareImg}
						/>
					))
				}
			</BentoGrid>
		</section>
	)
}
