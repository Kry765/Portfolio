import React from 'react'
import picture from '../img/zdj_portfolio_2.jpg'
import '../style/_aboutme.scss'
import '../style/reset.scss'
import {HiLightningBolt} from 'react-icons/hi';

export default function Aboutme() {
	return (
		<div className='about-me' id='Aboutme'>
			<h1>About me</h1>
			<div className='about-me__card'>
				<div className='about-me__foto-wrapper'>
					<img src={picture} className='about-me__foto' />
				</div>
				<div className='about-me__text'>
					<div><HiLightningBolt className='about-me__list-style'/>My name is Christopher</div>
					<div><HiLightningBolt className='about-me__list-style'/>I'm 23 years old</div>
					<div><HiLightningBolt className='about-me__list-style'/>I studying computer science
					<div><HiLightningBolt className='about-me__list-style'/> Now i am on the 3 years learn</div>
					WebDeveloper.</div>
					<div><HiLightningBolt className='about-me__list-style'/>My dream is work as professional Web-Developer</div>
				</div>
			</div>
		</div>
	)
}
