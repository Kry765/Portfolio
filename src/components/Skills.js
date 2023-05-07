import '../style/reset.scss'
import '../style/_skills.scss'

export default function Skills() {
	return (
		<div className='skills'>
			<h1>Skills</h1>
			<div className='skills__cards'>
				<div className='skills__card'>
					<p>PostgreSQL</p>
				</div>
				<div className='skills__card'>
					<p>React</p>
				</div>
				<div className='skills__card'>
					<p>JavaScript</p>
				</div>
				<div className='skills__card'>
					<p>CSS</p>
				</div>
				<div className='skills__card'>
					<p>SCSS</p>
				</div>
				<div className='skills__card'>
					<p>HTML</p>
				</div>
				<div className='skills__card'>
					<p>Node.js</p>
				</div>
			</div>
		</div>
	)
}
