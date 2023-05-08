import Menu from './components/Menu'
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Certyfication from './components/Certyfication'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<nav>
				<Menu />
			</nav>
			<header>
				<Header />
			</header>
			<main>
				<section>
					<Aboutme />
				</section>
				<section>
					<Skills />
				</section>
				<section>
					<Certyfication />
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default App
