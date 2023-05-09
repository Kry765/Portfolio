import React from 'react'
import '../style/_header.scss'
import photo from '../img/5107035.jpg'
export default function Hedaer() {
	return (
		<div className='header'>
			<h1 className='header__title'>Hi My name is Chris</h1>
			<div className='header__header-wrapper'>
				<div>
					<img src={photo} alt="two people work from content" className='header__primary-photo'/>
				</div>
				<div>
				<p className='header__text'>Thank you for being here, let me tell you something about myself</p>
					<button className='header__button'>Let's Go</button>
					<button className='header__button'>Contact Me</button>
				</div>
			</div>
		</div>
	)
}
