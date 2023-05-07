import Menu from './components/Menu'
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'

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
			</main>
		</div>
	)
}

export default App
