import '../style/reset.scss'
import '../style/_footer.scss'
import { Link } from 'react-scroll'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer__socialmedia-items'>
				<div className='footer__socialmedia-item'>
					<a href='https://www.linkedin.com/in/krzysztof-kl%C4%99ka-a75729225/'>
						<FaLinkedin />
					</a>
				</div>
				<div className='footer__socialmedia-item'>
					<a href='https://github.com/Kry765'>
						<AiFillGithub />
					</a>
				</div>
				<div className='footer__socialmedia-item'>
					<MdOutlineMail onClick={() => (window.location = 'mailto:krzysztofkleka91@gmail.com')} />
				</div>
			</div>
			<div>
				<nav className='footer__bottom-menu-items'>
					<a href='#' className='footer__bottom-menu-item'>
						Home
					</a>
					<a href='#' className='footer__bottom-menu-item'>
						About Me
					</a>
					<a href='#' className='footer__bottom-menu-item'>
						Skills
					</a>
					<Link to='Certyfication' className='footer__bottom-menu-item'>
						Certyfication
					</Link>
					<Link to='Contact' smooth={true} offset={-70} duration={500} className='footer__bottom-menu-item'>
						Contact me
					</Link>
				</nav>
			</div>
			<div>
				<p>Kry765 | &copy; All right reserved 2023</p>
			</div>
		</div>
	)
}
