import '../style/reset.scss'
import '../style/_footer.scss'

export default function Footer() {
	return (
		<div className='footer'>
			<div>
				<nav>
				<ul className='footer__bottom-menu-items'>
					<li className='footer__bottom-menu-item'>Home</li>
					<li className='footer__bottom-menu-item'>About Me</li>
					<li className='footer__bottom-menu-item'>Skills</li>
					<li className='footer__bottom-menu-item'>Certyfication</li>
					<li className='footer__bottom-menu-item'>Contact me</li>
				</ul>
				</nav>
			</div>
			<div>
				<p>Kry765 | &copy; All right reserved 2023</p>
			</div>
		</div>
	)
}
