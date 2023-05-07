import React from 'react'
import '../style/_header.scss'
export default function Hedaer() {
	return (
		<header>
			<div className='header'>
				<h1 className='header__title'>Hi My name is Chris</h1>
				<p className='header__text'>Thank you for being here, let me tell you something about myself</p>
				<button className='header__button'>Let's Go</button>
			</div>
		</header>
	)
}
