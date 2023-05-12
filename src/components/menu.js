import { IconMenu2 } from '@tabler/icons-react'
import { IconX } from '@tabler/icons-react'
import { IconBrandCodepen } from '@tabler/icons-react'
import '../style/reset.scss'
import '../style/_menu.scss'
import '../style/_mixins.scss'
import { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Menu() {
	const [navOpen, setOpenNav] = useState(false)

	const toggleNav = () => {
		setOpenNav(!navOpen)
	}

	const pauseAnimation = () => {
		setOpenNav(false)
	}

	const scrollToTop = () => {
		scroll.scrollToTop()
	}

	return (
		<div className='nav' id='Menu'>
			<IconBrandCodepen className='nav__logo' onClick={scrollToTop} />
			<div className='nav__desktop-items'>
				<Link to='Aboutme' smooth={true} offset={-70} duration={500} className='nav__desktop-item'>
					About Me
				</Link>
				<Link to='Skills' smooth={true} offset={-70} duration={500} className='nav__desktop-item'>
					Skills
				</Link>
				<Link to='Certyfication' smooth={true} offset={-70} duration={500} className='nav__desktop-item'>
					Certyfication
				</Link>
				<Link to='Contact' smooth={true} offset={-70} duration={500} className='nav__desktop-item'>
					Concact me
				</Link>
			</div>
			<div>
				<button>
					<IconMenu2 className='nav__burger-icon' onClick={toggleNav} />
					<IconX className='nav__close-icon' />
				</button>
			</div>
			<div
				className={`nav__mobile-items ${navOpen ? 'nav__mobile-items--close' : 'nav__mobile-items--active'} ${
					pauseAnimation ? 'active' : 'paused'
				}`}>
				<div className='nav__mobile-item'>
					<Link to='Aboutme' smooth={true} offset={-70} duration={500}>
						About Me
					</Link>
				</div>
				<div className='nav__mobile-item'>
					<Link to='Skills' smooth={true} offset={-70} duration={500}>
						Skills
					</Link>
				</div>
				<div className='nav__mobile-item'>
					<Link to='Certyfication' smooth={true} offset={-70} duration={500}>
						Certyfication
					</Link>
				</div>
				<div className='nav__mobile-item'>
					<Link to='Contact' smooth={true} offset={-70} duration={500}>
						Concact me
					</Link>
				</div>
			</div>
		</div>
	)
}
