import React from 'react'
import picture from '../img/3255337.jpg'
import '../style/_aboutme.scss'
import '../style/reset.scss'
export default function Aboutme() {
	return (
		<div className='about-me'>
			<h1>About me</h1>
			<div className='about-me__card'>
				<div className='about-me__foto'>
					<img src={picture} className='about-me__fototest' />
				</div>
				<div className='about-me__text'>
					loremloremloremmloremlorloremlormloremlorloremlorloremloremlorloremloremloremlorloremloremloremlorloremlorloremloremloremmloremlorloremlormloremlorloremlorloremloremlorloremloremloremlorloremloremloremlorloremlorloremloremloremmloremlorloremlormloremlorloremlorloremloremlorloremloremloremlorloremloremlore
				</div>
			</div>
		</div>
	)
}
