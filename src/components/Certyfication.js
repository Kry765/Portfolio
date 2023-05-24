import '../style/reset.scss'
import '../style/_certyfication.scss'
import Udemy1 from '../img/cert_cz1.jpg'
import Udemy2 from '../img/cert_cz.2.jpg'
// import

export default function Certyfication() {
	return (
		<div className='certyfication' id='Certyfication'>
			<div>
				<h1>Certyfication</h1>
			</div>
			<div className='certyfication__diplomas'>
				<div>
					<h3>English</h3>
					<div>
						<p>Certyfication</p>
					</div>
				</div>
				<div>
					<h3>Udemy</h3>
					<div>
						<img src={Udemy1} className='certyfication__img-diploma' alt='certyfication' />
					</div>
					<div>
						<img src={Udemy2} className='certyfication__img-diploma' alt='certyfication' />
					</div>
				</div>
			</div>
		</div>
	)
}
