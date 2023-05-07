import React from 'react'
import picture from '../img/me.png'
import '../style/_aboutme.scss'
import '../style/reset.scss'
export default function Aboutme() {
	return (
		<header>
			<div className='about-me'>
				<h1>About me</h1>
				<div className='about-me__card'>
					<div className='about-me__foto'>
						<img src={picture} />
					</div>
					<div className='about-me__text'>
						loremloremloremmloremlorloremlormloremlorloremlorloremloremlorloremloremloremlorloremloremloremlorloremlorloremloremloremmloremlorloremlormloremlorloremlorloremloremlorloremloremloremlorloremloremloremlorloremlorloremloremloremmloremlorloremlormloremlorloremlorloremloremlorloremloremloremlorloremloremlore
					</div>
				</div>
			</div>
		</header>
	)
}
