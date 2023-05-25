import React from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Certyfication from './components/Certyfication'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<header>
				<nav>
					<Menu id='Menu' />
				</nav>
				<Header id='Header' />
			</header>
			<main>
				<section>
					<Aboutme id='Aboutme' />
				</section>
				<section>
					<Skills id='Skills' />
				</section>
				<section>
					<Certyfication id='Certyfication' />
				</section>
				{/* <section> */}
				{/* <Contact id='Contact' /> */}
				{/* </section> */}
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default App
