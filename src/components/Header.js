import React from 'react'
import '../style/_header.scss'
import photo from '../img/5107035.jpg'
export default function Hedaer() {
	return (
		<div className='header'>
			<h1 className='header__title'>
				<span className='header__letter1'>H</span>
				<span className='header__letter2'>i</span>
				<span className='header__letter3'> </span>
				<span className='header__letter4'>M</span>
				<span className='header__letter5'>y</span>
				<span className='header__letter6'> </span>
				<span className='header__letter7'>N</span>
				<span className='header__letter8'>a</span>
				<span className='header__letter9'>m</span>
				<span className='header__letter10'>e</span>
				<span className='header__letter11'> </span>
				<span className='header__letter12'>i</span>
				<span className='header__letter13'>s</span>
				<span className='header__letter14'> </span>
				<span className='header__letter15'>C</span>
				<span className='header__letter16'>h</span>
				<span className='header__letter17'>r</span>
				<span className='header__letter18'>i</span>
				<span className='header__letter19'>s</span>
				<span className='header__letter20'>t</span>
				<span className='header__letter21'>o</span>
				<span className='header__letter22'>p</span>
				<span className='header__letter23'>h</span>
				<span className='header__letter24'>e</span>
				<span className='header__letter25'>r</span>
				<span className='header__cursor'>|</span>
			</h1>
			<div className='header__header-wrapper'>
				<div>{/* <img src={photo} alt='two people work from content' className='header__primary-photo' /> */}</div>
				<div>
					<p className='header__text'>Thank you for being here, let me tell you something about myself.</p>
					<button className='header__button'>Let's Go</button>
				</div>
			</div>
		</div>
	)
}
