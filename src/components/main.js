import { IconMenu2 } from '@tabler/icons-react'
import { IconX } from '@tabler/icons-react'
import { IconBrandCodepen } from '@tabler/icons-react'
import React from 'react'
import '../style/main.scss'
export default class Main extends React.Component {
	state = { isActive: false }

	ToggleClass = () => {
		this.setState({ isActive: !this.state.isActive })
	}
	render() {
		const isActive = this.state.isActive

		return (
			<div className='wrapper'>
				<nav>
					<div className='nav'>
						{/*LOGO */}
							<IconBrandCodepen  className='nav--logo'/>
						{/*DESKTOP NAV*/}
						<div className='nav__desktop-items'>
							<a className='nav__desktop-item'>About Me</a>
							<a className='nav__desktop-item'>Skills</a>
							<a className='nav__desktop-item'>Certyfication</a>
							<a className='nav__desktop-item'>Concact me</a>
						</div>
						{/*MOBILE NAV*/}
						<div>
							<button onClick={this.ToggleClass} className={isActive ? 'nav__btn-style' : 'nav__btn-style-active'}>
								<IconMenu2 className='nav__burger-icon' />
								<IconX className='nav__close-icon' />
							</button>
						</div>
						<div className={isActive ? 'nav__mobile-items--active' : 'nav__mobile-items'}>
							<div className='nav__mobile-item'>About Me</div>
							<div className='nav__mobile-item'>Skills</div>
							<div className='nav__mobile-item'>Certyfication</div>
							<div className='nav__mobile-item'>Concact me</div>
						</div>
					</div>
				</nav>
				<header>
					<div className='header'>
						<h1 className='header__title'>Hi My name is Chris</h1>
						<p className='header__text'>thank you for being here, let me tell you something about myself</p>
						<button className='header__button'>Let's Go</button>
					</div>
				</header>
			</div>
		)
	}
}
