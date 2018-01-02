import React from 'react'

import SearchBar from '../components/SearchBar'
import backgroundImage from '../assets/background.jpg'

const onSearch = searchValue => {
	window.localStorage.searchValue = searchValue
}

const Home = () => (
	<div
		style={{
			height: '100vh',
			width: '100vw',
			backgroundImage: `url(${backgroundImage})`,
		}}
	>
		<div
			style={{
				margin: '0 auto',
				fontSize: '50px',
				textAlign: 'center',
				verticalAlign: 'center',
			}}
		>
			Home Page
		</div>
		<div>
			<SearchBar onSearch={onSearch} />
		</div>
	</div>
)

export default Home
