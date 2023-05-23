import '../style/reset.scss'
import '../style/_skills.scss'
import { DiPostgresql } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaSass } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { DiJavascript } from 'react-icons/di'
import { SiReact } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { SiBem } from 'react-icons/si'

export default function Skills() {
	return (
		<div className='skills' id='Skills'>
			<h1>Skills</h1>
			<div className='skills__cards'>
				<div className='skills__card'>
					<div>
						<DiPostgresql className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--postgres'></div>
					</div>
					<p>PostgreSQL</p>
				</div>
				<div className='skills__card'>
					<div>
						<SiReact className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--react'></div>
					</div>
					<p>React</p>
				</div>
				<div className='skills__card'>
					<div>
						<DiJavascript className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--js'></div>
					</div>
					<p>JavaScript</p>
				</div>
				<div className='skills__card'>
					<div>
						<IoLogoCss3 className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--css'></div>
					</div>
					<p>CSS</p>
				</div>
				<div className='skills__card'>
					<div>
						<FaSass className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--scss'></div>
					</div>
					<p>SCSS</p>
				</div>
				<div className='skills__card'>
					<div>
						<AiFillHtml5 className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--html'></div>
					</div>
					<p>HTML</p>
				</div>
				<div className='skills__card'>
					<div>
						<AiFillGithub className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--github'></div>
					</div>
					<p>GitHub</p>
				</div>
				<div className='skills__card'>
					<div>
						<FaNodeJs className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--node'></div>
					</div>
					<p>Nodejs</p>
				</div>
				<div className='skills__card'>
					<div>
						<SiBem className='skills__icon' />
					</div>
					<div className='skills__progress-bar'>
						<div className='skills__progress-bar--bem'></div>
					</div>
					<p>BEM</p>
				</div>
			</div>
		</div>
	)
}
