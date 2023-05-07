import '../style/reset.scss'
import '../style/_skills.scss'
import pglogo from '../img/pglogo.png'

export default function Skills() {
	return (
		<div className='skills'>
			<h1>Skills</h1>
			<div className='skills__cards'>
				<div className='skills__card'>
					<img src={pglogo} alt='postgres logo' className='skills_logo' />
					<p>PostgreSQL</p>
				</div>
				<div className='skills__card'>
					<div></div>
					<p>React</p>
				</div>
				<div className='skills__card'>
					<div></div>
					<p>JavaScript</p>
				</div>
				<div className='skills__card'>
					<div></div>
					<p>CSS</p>
				</div>
				<div className='skills__card'>
					<div></div>
					<p>SCSS</p>
				</div>
				<div className='skills__card'>
					<div></div>
					<p>HTML</p>
				</div>
				<div className='skills__card'>
					<div></div>
					<p>Nodejs</p>
				</div>
			</div>
		</div>
	)
}
