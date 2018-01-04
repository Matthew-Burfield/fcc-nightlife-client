import React from 'react'
import PropTypes from 'prop-types'

const CityFour = ({ width, height }) => (
	<svg width={width} height={height} viewBox="0 0 7063 2677" xmlns="http://www.w3.org/2000/svg">
		<path
			fill="#C4C8DB"
			d="M0 2677v-87.562h501.245v-650.493h235.426V856.888h106.332v-75.056h273.407v68.808h98.722v631.72H1412.6v-100.08h493.647v-137.597h68.351V281.461h98.734V168.876h75.939V25.022h68.352v137.597h68.351v125.1h113.92v1044.528h318.974v-212.662h349.356v237.684h197.457v-506.63h189.869v268.946h68.352v369.032h258.22V525.393l432.894-400.303h83.537v1132.1h144.302v-131.348h463.264v131.349h136.704V100.078h151.9V0h311.375v106.326h151.889v1075.809h273.406v106.326h265.82V788.09l68.352-43.786h356.943l68.352 56.292v594.191h189.869v344.011H7063V2677H0"
			fillRule="evenodd"
		/>
	</svg>
)

CityFour.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
}

CityFour.defaultProps = {
	width: 300,
	height: 300,
}

export default CityFour
