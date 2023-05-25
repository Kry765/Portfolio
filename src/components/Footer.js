import '../style/reset.scss'
import '../style/_footer.scss'
import { SiFacebook } from 'react-icons/si'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer__socialmedia-items'>
				<div className='footer__socialmedia-item'>
					<SiFacebook />
				</div>
				<div className='footer__socialmedia-item'>
					<TiSocialLinkedinCircular />
				</div>
				<div className='footer__socialmedia-item'>
					<AiFillGithub />
				</div>
				<div className='footer__socialmedia-item'>
					<MdOutlineAlternateEmail />
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
					<a href='#' className='footer__bottom-menu-item'>
						Certyfication
					</a>
					<a href='#' className='footer__bottom-menu-item'>
						Contact me
					</a>
				</nav>
			</div>
			<div>
				<p>Kry765 | &copy; All right reserved 2023</p>
			</div>
		</div>
	)
}
