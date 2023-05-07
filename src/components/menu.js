export default function Menu() {
	return (
		<div>
			<nav>
				<div className='nav'>
					{/*LOGO */}
					<IconBrandCodepen className='nav--logo' />
					{/*DESKTOP NAV*/}d
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
		</div>
	)
}
