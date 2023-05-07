import { IconMenu2 } from '@tabler/icons-react'
import { IconX } from '@tabler/icons-react'
import { IconBrandCodepen } from '@tabler/icons-react'
import React from 'react'
import '../style/main.scss'
export default class Main extends React.Component {
	state = { isActive: false }

	ToggleClass = () => {
		this.setState({ isActive: !this.state.isActive })
	}
	render() {
		const isActive = this.state.isActive

		return (
			<div className='wrapper'>
				<header>
					<div className='header'>
						<h1 className='header__title'>Hi My name is Chris</h1>
						<p className='header__text'>thank you for being here, let me tell you something about myself</p>
						<button className='header__button'>Let's Go</button>
					</div>
				</header>
			</div>
		)
	}
}
