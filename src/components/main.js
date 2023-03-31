import { IconMenu2 } from '@tabler/icons-react'
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
			<div>
				<nav className='nav'>
					{/*DESKTOP NAV*/}
					<div className='nav__desktop-menu-items'>
						<a className='nav__desktop-menu-item'>About Me</a>
						<a className='nav__desktop-menu-item'>Skills</a>
						<a className='nav__desktop-menu-item'>Certyfication</a>
						<a className='nav__desktop-menu-item'>Concact me</a>
					</div>

					{/*MOBILE NAV*/}
					<button onClick={this.ToggleClass}>
						<IconMenu2 className='nav__burger-icon' />
					</button>
					<div className={isActive ? 'nav__mobile-menu-items' : 'nav__mobile-menu-items--active'}>
						<div className='nav__mobile-menu-item'>About Me</div>
						<div className='nav__mobile-menu-item'>Skills</div>
						<div className='nav__mobile-menu-item'>Certyfication</div>
						<div className='nav__mobile-menu-item'>Concact me</div>
					</div>
				</nav>
			</div>
		)
	}
}
