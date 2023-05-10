import React from 'react'
import '../style/_header.scss'
import photo from '../img/5107035.jpg'
export default function Hedaer() {
	return (
		<div className='header'>
			<h1 className='header__title'>
				<span className='header--letter1'>H</span>
				<span className='header--letter2'>i</span>
				<span className='header--letter3'>M</span>
				<span className='header--letter4'>y</span>
				<span className='header--letter5'>N</span>
				<span className='header--letter6'>a</span>
				<span className='header--letter7'>m</span>
				<span className='header--letter8'>e</span>
				<span className='header--letter9'>i</span>
				<span className='header--letter10'>s</span>
				<span className='header--letter11'>C</span>
				<span className='header--letter12'>h</span>
				<span className='header--letter13'>r</span>
				<span className='header--letter14'>i</span>
				<span className='header--letter15'>s</span>
			</h1>
			<div className='header__header-wrapper'>
				<div>
					<img src={photo} alt='two people work from content' className='header__primary-photo' />
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
