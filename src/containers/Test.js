import React from 'react'

import Moon from '../assets/svg/Moon'
import CityOne from '../assets/svg/CityOne'
import CityTwo from '../assets/svg/CityTwo'
import CityThree from '../assets/svg/CityThree'
import CityFour from '../assets/svg/CityFour'
import Diners from '../assets/svg/Diners'
import Star from '../assets/svg/Star'

import './test.scss'

const bgGradient = {
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1d0e49+0,a65dad+100 */
	// background: '#1d0e49' /* Old browsers */,
	// background: '-moz-linear-gradient(top, #1d0e49 0%, #a65dad 100%)', // FF3.6-15
	// background: '-webkit-linear-gradient(top, #1d0e49 0%,#a65dad 100%)', // Chrome10-25,Safari5.1-6
	background: 'linear-gradient(to bottom, #1d0e49 0%,#a65dad 100%)', // W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+
	filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#1d0e49', endColorstr='#a65dad',GradientType=0 )`, // IE6-9
}

const parallaxSpeed = val => ({
	transform: `translateZ(${val * -1}px) scale(${1 + val})`,
})

const getStyles = (val, paddingHeight) =>
	Object.assign({}, { padding: `${paddingHeight}px 0` }, parallaxSpeed(val))

const Test = () => (
	<div>
		<div className="parallax">
			<div className="parallaxGroup">
				<div
					className="parallaxLayer"
					style={Object.assign({}, getStyles(3.2, 0), {
						padding: '50px 0 0 30vw',
						textAlign: 'left',
					})}
				>
					<Moon />
				</div>
				<div className="parallaxLayer" style={getStyles(2.4, 60)}>
					<CityFour />
				</div>
				<div className="parallaxLayer" style={getStyles(2.3, 105)}>
					<CityThree />
				</div>
				<div className="parallaxLayer" style={getStyles(2.2, 160)}>
					<CityTwo />
				</div>
				<div className="parallaxLayer" style={getStyles(2.1, 170)}>
					<CityOne />
				</div>
				<div
					style={{
						position: 'absolute',
						top: '-83vh',
						right: 0,
						left: 0,
						height: 340,
						transform: `translateZ(${-2.5}px) scale(${3.5})`,
						zIndex: -1,
						...bgGradient,
					}}
				/>
				{/* // black floor board */}
				<div
					className="parallaxLayer"
					style={Object.assign({}, getStyles(2.2, 4), {
						padding: 0,
						margin: '150px 0',
						height: 40,
						width: '100%',
						backgroundColor: 'black',
					})}
				/>

				{/* // black left wall */}
				<div
					className="parallaxLayer"
					style={Object.assign({}, getStyles(2.2, 4), {
						backgroundColor: 'black',
						transform: 'translateZ(-2.2px) translateX(-150vw) translateY(-730px) scale(3.2)',
						height: 440,
						width: '30%',
					})}
				/>

				{/* // black right wall */}
				<div
					className="parallaxLayer"
					style={Object.assign({}, getStyles(2.2, 4), {
						transform: 'translateZ(-2.2px) translateX(220vw) translateY(-730px) scale(3.2)',
						height: 440,
						width: '30%',
						backgroundColor: 'black',
					})}
				/>
				<div className="parallaxLayer" style={getStyles(1.5, 170)}>
					<Diners />
				</div>
				<div className="parallaxLayer heading" style={getStyles(2.2, 500)}>
					Nightlife
				</div>
			</div>
		</div>
		<div style={{ height: '100vh', backgroundColor: 'red' }}>Normal Div</div>
		{/* <div style={Object.assign({}, parallaxGroup, { backgroundColor: 'red' })}>Second Group</div> */}
		{/* <div data-jarallax-element="-140">
			<Moon />
		</div>
		<CityOne />
		<CityTwo />
		<CityThree />
		<CityFour />
		<Diners />
		<Star width={10} height={10} /> */}
	</div>
)

export default Test
