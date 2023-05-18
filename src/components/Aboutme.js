import React from 'react'
import picture from '../img/zdj_portfolio_2.jpg'
import '../style/_aboutme.scss'
import '../style/reset.scss'
export default function Aboutme() {
	return (
		<div className='about-me' id='Aboutme'>
			<h1>About me</h1>
			<div className='about-me__card'>
				<div className='about-me__foto-wrapper'>
					<img src={picture} className='about-me__foto' />
				</div>
				<div className='about-me__text'>
					Hi, I'm Chris, I'm 23 years old and I'm studying computer science and more specifically specialization
					WebDeveloper. Now i am on the 3 years learn. My dream is work as professional Web-Developer and create
					beautiful website from the people.
				</div>
			</div>
		</div>
	)
}
