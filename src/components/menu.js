import { IconMenu2 } from '@tabler/icons-react'
import { IconX } from '@tabler/icons-react'
import { IconBrandCodepen } from '@tabler/icons-react'
import '../style/reset.scss'
import '../style/_menu.scss'
import '../style/_mixins.scss'
import { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { CSSTransition } from 'react-transition-group'

export default function Menu() {
	const [navOpen, setOpenNav] = useState(false)
	const [inBorder, setInBorder] = useState(false)

	const bottomLine = () => {
		setInBorder(!inBorder)
	}

	const toggleNav = () => {
		setOpenNav(!navOpen)
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
					{/* <IconMenu2
						className='nav__burger-icon'
						onClick={() => {
							toggleNav()
							handleClick()
						}}
					/> */}
					{/* <IconMenu2
						className='nav__burger-icon'
						onClick={() => {
							toggleNav()
							handleClick()
						}}
					/> */}
					<div
						className='nav__burger-icon'
						onClick={() => {
							toggleNav()
							bottomLine()
						}}>
						<div className='nav__burger-hight-line'></div>
						<div className='nav__burger-center-line'></div>
						<div className='nav__burger-secondly-line'></div>
						<div className='nav__burger-bottom-line'></div>
					</div>
				</button>
			</div>
			<div className={`nav__mobile-items ${navOpen ? 'nav__mobile-items--close' : 'nav__mobile-items--active'}`}>
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
