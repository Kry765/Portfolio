import { IconMenu2 } from '@tabler/icons-react'
import { IconX } from '@tabler/icons-react'
import { IconBrandCodepen } from '@tabler/icons-react'
import '../style/reset.scss'
import '../style/_menu.scss'
import '../style/_mixins.scss'
import { useState } from 'react'

export default function Menu() {
	const [navOpen, navClose] = useState(false)

	const toggleNav = () => {
		navClose(!navOpen)
	}

	return (
		<div className='nav'>
			{/*LOGO */}
			<IconBrandCodepen className='nav__logo' />
			{/*DESKTOP NAV*/}
			<div className='nav__desktop-items'>
				<a className='nav__desktop-item'>About Me</a>
				<a className='nav__desktop-item'>Skills</a>
				<a className='nav__desktop-item'>Certyfication</a>
				<a className='nav__desktop-item'>Concact me</a>
			</div>
			{/*MOBILE NAV*/}
			<div>
				<button>
					<IconMenu2 className='nav__burger-icon' onClick={toggleNav} />
					<IconX className='nav__close-icon' />
				</button>
			</div>
			<div className={navOpen ? 'nav__mobile-items--active' : 'nav__mobile-items'}>
				<div className='nav__mobile-item'>About Me</div>
				<div className='nav__mobile-item'>Skills</div>
				<div className='nav__mobile-item'>Certyfication</div>
				<div className='nav__mobile-item'>Concact me</div>
			</div>
		</div>
	)
}
