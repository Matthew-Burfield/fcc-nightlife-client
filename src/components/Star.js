import React from 'react'
import PropTypes from 'prop-types'

const Star = ({ width, height }) => (
	<svg width={width} height={height} viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M0 31.5c0 1.806.15 3.578.437 5.301C2.547 49.453 12.082 59.54 24.33 62.27A30.712 30.712 0 0 0 31 63c10.543 0 19.856-5.348 25.457-13.52a31.6 31.6 0 0 0 4.497-9.837A32.023 32.023 0 0 0 62 31.5c0-2.935-.395-5.776-1.134-8.471a31.557 31.557 0 0 0-3.236-7.663 31.515 31.515 0 0 0-3.164-4.45C48.781 4.23 40.377 0 31 0 19.983 0 10.308 5.84 4.811 14.64 1.764 19.513 0 25.297 0 31.5"
			fill="#F6E17E"
			fillRule="evenodd"
		/>
	</svg>
)

Star.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
}

Star.defaultProps = {
	width: 300,
	height: 300,
}

export default Star
