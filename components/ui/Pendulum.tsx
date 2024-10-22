import React from 'react'
import pendulum from './styles/pendulum.module.css'

export const Pendulum = () => {
	return (
		<div className={pendulum.pendulumContainer}>
			<div className={`${pendulum.string} ${pendulum.stringOne}`}></div>
			<div className={`${pendulum.string} ${pendulum.stringTwo}`}></div>
			<div className={`${pendulum.string} ${pendulum.stringThree}`}></div>
			<div className={`${pendulum.string} ${pendulum.stringFour}`}></div>
			<div className={`${pendulum.string} ${pendulum.stringFive}`}></div>
		</div>
	)
}
