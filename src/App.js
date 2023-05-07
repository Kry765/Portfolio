import Menu from './components/Menu'
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Certyfication from './components/Certyfication'

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
		</div>
	)
}

export default App
