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

	const [inBorder, setInBorder] = useState(false)
	const bottomLine = () => {
		setInBorder(!inBorder)
	}

	const [inTopMenu, setInTopMenu] = useState(false)

	const hideTopBurgerbar = () => {
		setInTopMenu(!inTopMenu)
	}

	const scrollToTop = () => {
		scroll.scrollToTop()
	}

	return (
		<div className='nav' id='Menu'>
			<IconBrandCodepen className='nav__logo' onClick={scrollToTop} />
			<div className='nav__desktop-items'>
				<Link to='#' smooth={true} offset={-70} duration={500} className='nav__desktop-item' onClick={scrollToTop}>
					Home
				</Link>
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
					<div
						className='nav__burger-icon'
						onClick={() => {
							toggleNav()
							bottomLine()
							hideTopBurgerbar()
						}}>
						<div className={inTopMenu ? 'nav__burger-top-line--close-top-line' : 'nav__burger-top-line'}></div>
						<div className={inTopMenu ? 'nav__burger-center-line--close-center-line' : 'nav__burger-center-line'}></div>
						<div
							className={inTopMenu ? 'nav__burger-support-line--close-support-line' : 'nav__burger-support-line'}></div>
					</div>
				</button>
			</div>
			<div
				className={`nav__mobile-items ${navOpen ? 'nav__mobile-items--close-nav' : 'nav__mobile-items--active-nav'}`}>
				<div className='nav__mobile-item'>
					<Link to='Home' smooth={true} offset={-70} duration={500}>
						Home
					</Link>
					<div className={inBorder ? 'nav__bottom-line--draw' : 'nav__bottom-line'}></div>
				</div>
				<div className='nav__mobile-item'>
					<Link to='Aboutme' smooth={true} offset={-70} duration={500}>
						About Me
					</Link>
					<div className={inBorder ? 'nav__bottom-line--draw' : 'nav__bottom-line'}></div>
				</div>
				<div className='nav__mobile-item'>
					<Link to='Skills' smooth={true} offset={-70} duration={500}>
						Skills
					</Link>
					<div className={inBorder ? 'nav__bottom-line--draw' : 'nav__bottom-line'}></div>
				</div>
				<div className='nav__mobile-item'>
					<Link to='Certyfication' smooth={true} offset={-70} duration={500}>
						Certyfication
					</Link>
					<div className={inBorder ? 'nav__bottom-line--draw' : 'nav__bottom-line'}></div>
				</div>
				<div className='nav__mobile-item'>
					<Link to='Contact' smooth={true} offset={-70} duration={500}>
						Concact me
					</Link>
					<div className={inBorder ? 'nav__bottom-line--draw' : 'nav__bottom-line'}></div>
				</div>
			</div>
		</div>
	)
}
