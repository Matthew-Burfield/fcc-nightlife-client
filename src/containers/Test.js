import React from 'react'

import Moon from '../assets/svg/Moon'
import CityOne from '../assets/svg/CityOne'
import CityTwo from '../assets/svg/CityTwo'
import CityThree from '../assets/svg/CityThree'
import CityFour from '../assets/svg/CityFour'
import Diners from '../assets/svg/Diners'
import Star from '../assets/svg/Star'

const Test = () => (
	<div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
		<Moon />
		<CityOne />
		<CityTwo />
		<CityThree />
		<CityFour />
		<Diners />
		<Star width={10} height={10} />
	</div>
)

export default Test
