import '../style/reset.scss'
import '../style/_footer.scss'
import {SiFacebook} from 'react-icons/si'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import {MdOutlineAlternateEmail} from 'react-icons/md'

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer__socialmedia-items'>
				<div className='footer__socialmedia-item'><SiFacebook/></div>
				<div className='footer__socialmedia-item'><TiSocialLinkedinCircular/></div>
				<div className='footer__socialmedia-item'><AiFillGithub/></div>
				<div className='footer__socialmedia-item'><MdOutlineAlternateEmail/></div>
			</div>
			<div>
				<nav>
				<ul className='footer__bottom-menu-items'>
					<li className='footer__bottom-menu-item'><a href="#">Home</a></li>
					<li className='footer__bottom-menu-item'><a href="#">About Me</a></li>
					<li className='footer__bottom-menu-item'><a href="#">Skills</a></li>
					<li className='footer__bottom-menu-item'><a href="#">Certyfication</a></li>
					<li className='footer__bottom-menu-item'><a href="#">Contact me</a></li>
				</ul>
				</nav>
			</div>
			<div>
				<p>Kry765 | &copy; All right reserved 2023</p>
			</div>
		</div>
	)
}
