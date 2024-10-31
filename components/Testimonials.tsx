import React from 'react'
import { TestimonialInfiniteCards } from './ui/TestimonialsInfiniteCards'
import { testimonials } from '@/data'

export const Testimonials = () => {
	return (
		<section id="testimonials">
			<h1 className="heading p-8">Testimonials</h1>
			<div className="flex flex-col items-center my-4">
				<div className="rounded-md flex flex-col antialiased items-center relative overflow-hidden">
					<TestimonialInfiniteCards
						items={testimonials}
						direction="right"
						speed="slow"
					/>
				</div>
			</div>
		</section>
	)
}
