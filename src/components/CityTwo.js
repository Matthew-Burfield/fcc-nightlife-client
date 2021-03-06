import React from 'react'
import PropTypes from 'prop-types'

const CityTwo = ({ scale }) => (
	<svg
		width={7985 * scale}
		height={1497 * scale}
		viewBox="0 0 7985 1497"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill="#9AA1C5"
			d="M0 1443.536v-61.102h478.417v-611.02H723.32V129.841h210.731v641.571h148.082V542.281h74.04V420.077h484.112V542.28h74.041v229.132h284.772V305.51h148.081v465.903h142.386V129.842h62.65V38.189h489.807v91.653h62.65v252.046h165.168V641.57h313.248v152.756h478.417V152.755h193.645V22.913h96.822v129.842h193.645v320.786h159.472v198.581h626.498V61.102h689.148v252.046h472.72v213.857h227.818V76.378h91.127V0h205.036v76.378h79.736v450.627h233.513v274.96h233.513V679.76h136.69v290.235h279.076v381.888H7985V1497H0v-53.464"
			fillRule="evenodd"
		/>
	</svg>
)

CityTwo.propTypes = {
	scale: PropTypes.number,
}

CityTwo.defaultProps = {
	scale: 0.1,
}

export default CityTwo
