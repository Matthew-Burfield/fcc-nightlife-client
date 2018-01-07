import React from 'react'
import PropTypes from 'prop-types'

const Moon = ({ scale }) => (
	<svg
		width={1158 * scale}
		height={1183 * scale}
		viewBox="0 0 1158 1183"
		version="1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g fill="none" fillRule="evenodd">
			<path
				d="M0 596a583 583 0 0 0 575 587 571 571 0 0 0 556-436 600 600 0 0 0-121-535 569 569 0 0 0-921 69C33 372 0 480 0 596"
				fill="#F6E17E"
			/>
			<path
				d="M82 853h1c7 0 11 4 16 6-1 13 9 21 5 33-16 0-24-20-22-39zm282 180h6c7 0 15 2 18 6h3c4 0 7-1 9-3 3-1 6-3 10-3h1c-2 10 5 16 12 21 0 5-1 9-4 12h-14l-12-1c-4 1-2 8-6 10l-4-2v-10c-8-8-14-18-19-30zm2 58c1-5 5-14 10-14 2 0 4 0 6 2 1 9-5 10-7 15 11 7 26 4 36 11 4 4 6 10 11 13 2-3 6-5 11-5l8 2c3 3 4 7 3 12l-4 1c-6 0-11-4-15-5l-15 3c-11 0-22-5-29-10-5-9-7-21-15-25zm609-503h1c9 0 8 13 7 25l3 1 5-2 6-2h1c4 6 10 10 15 14 1 9-4 12-12 13-5-6-9-15-18-20h-3l-3-1c-6-4-17-28-2-28zm147-15l6 2c2 5-1 7-5 7l-5-2c-1-5 1-7 4-7zm-24-214c0 3-2 6-5 6-5 0-4-5-5-8l-5 1c-5 0-9-3-11-6l-1-4c-1-5 0-10 5-10l6 3c4 2 5 10 7 12s8 3 9 6zM983 250c2 10 8 17 8 26-1 13-21 30-29 31h-3c-11 0-22-8-29-11-13-6-27-10-32-20-3-7-1-12-4-16-9-13-36-22-27-45 2-3 6-4 9-7 5-8 5-18 12-23 6 0 9-3 13-6 6 4 14 9 20 9 5 0 9-2 11-10 10 4 18 9 21 19 11 4 18 15 27 25 9 11 17 20 3 28zM565 89l-7-1c-8 0-13 4-19 9s-11 9-19 9h-2c-4 0-8-6-13-6l-3-1c-6 0-12 2-18 4-5 2-11 3-17 3l-9-1c-2-8 1-16 9-17h5l4 1h1c7-2 12-10 20-14 12-7 26-10 39-10 10 0 19 2 29 5v19zm-166 41c-3 9-9 15-15 21-8-4-11-12-20-14-7 1-10 7-16 10-9 4-20 2-30 5-8 2-17 11-23 16-7 7-11 16-20 19l-5 1h-10c-4 1-7 7-12 9l-8 1-14-2c-6-9-1-14 8-21l14-11c17-9 36-9 45-22 8-3 16 1 25-3 11-4 14-16 31-16h2c4 0 7 3 11 3h2l9-1 10-1c5 0 11 2 16 6zm170 567l-5-1c1-8 3-10 5-10 3 0 5 3 5 5 1 3 0 6-5 6zm-17 10c-7 0-17-9-13-17 8 1 15 2 20 6 1 8-2 11-7 11zM8 686a585 585 0 0 0 446 475l-2-4h-5c-7 0-12-1-13-7 10-6 28-3 29-15 1-9-6-13-12-19-3-4-6-8-7-13l-12-4c4-9 9-12 14-12 13 0 30 25 43 27 4 0 6-2 9-4 2-2 4-4 7-4l7 3c2 3 1 8 0 12 11 9 30 10 40 20-3 7-10 9-18 9l-21-1c-10 0-13-10-19-12l-10-1c-13 0-27 7-26 18 3 7 18 2 18 11v1a575 575 0 0 0 577-245c-3 0-5-2-5-5-2-23 9-33 22-40 4-20 27-31 32-51 2-13-4-25 1-41l6-4h6l3 1 3-1c5-14 8-31 17-41a596 596 0 0 0-1-309c-4-4-8-9-13-10-3-25-14-43-25-62 6-13-2-22-4-36l-19-35-7-7-5-12c-6-10-17-14-21-22-10-1-16-8-20-15 14-11-7-18-6-27a574 574 0 0 0-927 69c-2 7-2 14 3 19 10-5 21-12 29-21 4-4 6-10 10-13s10-4 14-8c5-4 7-11 12-16 9-10 22-18 36-18h4c0 10-9 11-14 15-7 5-11 11-20 15-3 1-10 1-14 3-9 6-6 20-7 31-3 17-17 29-30 36-8 13 1 24 6 34-3 8-10 17-4 27 7 0 9-6 15-6l6 2 6 2 4-2c1-7-10-8-12-14-2-8 1-16 9-18 3 2 1 8 6 8 5-2 8-8 12-12 2-18 2-37 10-47 4-6 10-8 15-11 5-4 10-14 17-16h1l6 2 6 2h2c8-10 12-18 19-28l15-14c6-5 9-14 17-16l13-1h3c6 0 13-1 18-6-1-4-2-8-1-13 3-5 11-10 18-10 5 0 8 2 10 8 0 5-5 6-4 12h4l17 1 17 1h7c14 19 37 30 63 36 0 6 0 11 3 13 15 2 26 8 34 17-2 5-4 16 3 17 8-11 16-28 11-46 3-5 8-9 9-17 11-21 57-8 70-27-3-15-20-15-25-28 7-5 20-6 21-17-2-7-13-4-14-12l4-1 6 1 6 1 5-1c0 5-5 5-3 12 8 2 14 6 23 7 6-2 8-8 16-8l4 1c3 3 2 12 6 15l5 1c8 0 14-7 21-10 1-7-7-5-6-14 6-7 22-3 31-7 6 9 12 18 23 23-8 9-3 27-14 33-7-4-16-6-27-7-4-2-3-9-9-9-3 14 3 25 5 37 24 9 53 12 57 40 4 3 12 2 13 7 1 6-3 7-2 13 3 7 12 7 10 19 5 3 9 7 16 10 4-6 7-13 8-21 5-1 10-3 13-6l-2-17c3-3 6-4 9-4 10 0 17 11 19 19l16-1c11 0 19 3 14 19 3 7 10 5 16 11 6 4 9 15 16 17h10a34 34 0 0 1 9-1c3 0 7 4 10 4l4 1 5-1h7c5 3 6 9 10 14 17 4 37 10 54 17 6 2 10 7 15 9h5l3-1 2 1c5 1 7 6 13 6 4 0 8-4 12-5 6-3 13-3 19-7 6 1 5 9 12 10 4-21-9-34-16-47 5-7 2-17 1-26 2-4 7-7 13-8 1 3 0 9 3 11 7 3 18 3 20 12 2 6-3 13-4 19-1 10 1 21 5 30 5 9 12 15 21 17 1 4 3 6 2 12l-17 5c0 9-6 11-9 16 4 8 8 14 16 17 5-2 5-8 9-11 10 3 29 6 20 21l-3 1-5-1-4-1-3 1c-6 1-3 12-8 14-9 3-15-1-22 4-9 7-8 34-3 43 6 10 18 7 21 16-3 10-11 28-2 37 7-5 8-16 12-24 6 1 10 2 14 5 2 9 6 17 12 21 9-9 2-22 2-32 6 0 10 2 14 4 6 12 10 31 6 45-5-3-11-5-16-5s-10 2-12 7c0 7 6 7 6 13-3 6-4 14-11 15-3-22-20-29-28-47-6 9 2 15 3 22-2 7-7 12-17 12 2 20-2 46-20 46l-8-1c0-14-21-20-23-33-2-7 4-15 7-23l3 1c16 0 23-18 13-29l-16 1c-7 0-13-1-20-4-5 1-5 8-9 11a27 27 0 0 0-19-5c-5-7-11-12-10-25l-6-2c-4 0-8 3-13 4-5-3 0-11-2-15-6-6-21-2-27-8 4-9 6-27-8-27h-3l-10-15c0-4 6-5 2-9h-2l-12 3c-4 1-8 3-13 3h-4c-3-6-8-8-15-8l-12 2c3 18-5 33-3 47l5 12c4 15 10 24 12 37 1 6-1 11 3 16l7-3c4 0 7 4 13 5h2c5 0 10-2 16-4 5-2 11-3 18-3h6c4 5 8 9 14 9l7-1c6 4 7 15 4 23 9 18 13 41 34 48 3 11 13 32-4 35-8-4-3-14-1-20-5-2-9-4-14-4-3 0-7 1-10 3-5 2-6 10-11 11h-2l-5-2-6-1-3 1c6 9 3 19-5 19-12 0-9-13-4-22-2-2-4-3-7-3l-10 1c-3-7-11-12-16-18-3-4-8-15-8-19 1-4 6-5 7-11v-8c2-5 10-8 10-14-12-2-15-12-28-13-5 4-5 13-10 17-6-7-16-17-27-17h-2c-6 1-7 7-13 7h-1c-4-2-4-9-5-13-6-7-14-7-14-15-1-11 9-11 9-19 0-6-11-17-16-18l-4-1c-8 0-16 5-22 6l-8-2-8-2-1 1c-5 0-11 7-16 7h-1c-6-1-3-5-8-11-4-6-11-10-13-17a29 29 0 0 0-13-1c-2 3-1 9-5 12-8-2-7-12-10-20-7-8-12-18-16-29-10-3-20-3-19-14 0-7 7-5 10-12-3-7-7-12-11-17-10 8 1 29-10 39h-5l-5 1c-12 13 7 18 6 29-1 7-11 7-16 11-8 6-13 22-23 25a79 79 0 0 0-30-5c-13 22 5 48 14 65-16 14 16 28-1 44l-6-2c-5 0-8 2-12 3-4 2-7 4-10 4h-1c-5-2-10-5-15-5-7 0-9 3-16 4-4-2-10-3-15-3s-10 1-13 4c-1 4 0 7 1 10l4 1 4-1h5c2 0 4 0 5 2 1 17-13 18-26 20-4 7-12 11-15 19 8 9 19 15 27 23 3-2 5-3 8-3 7 0 14 7 20 13 9 9 18 17 17 32 9 0 7-10 15-10 7 7 16 11 18 18 2 5 5 18 4 25-2 11-12 18-10 29 1 7 10 11 17 18 3 4 4 8 6 9 7 7 17 6 19 13 1 4-1 9-1 12 1 10 7 19 1 29-11 4-20 12-27 21 4 10 3 20-6 22l-3 1-9-1-9-2-5 1c-5 2-3 6-9 8h-2c-7 0-10 5-17 5h-2l-12-3-12-3-4 1c0 11 11 11 9 24 12 2 18 11 16 27-6 3-8 10-15 11l-6-1-4-1c-2 0-3 0-3 2-3 8 17 4 17 13l-5 1-5-1-6-1h-1c-6 1-10 6-16 7h-3c-14 0-23-12-31-23 12-1 10-22 1-22h-2c-10 2-3 16-3 22-1 4-5 7-5 11 1 5 8 7 7 14-7 5-21 3-28 8-3-4-8-5-13-5l-7 1h-1l-8 1-8-2c-7-3-4-11-11-14h-6c-19 0-28-9-32-24-7-8-20-10-24-22 1-17-1-34 8-49-3-4-9-7-15-7l-6 1c-4 5 6 5 3 13-2 1-2 4-5 5l-9-2h-3c-4 6 2 18-5 23h-1c-8 0-10 6-14 9-6 0-9-3-14-4-6-12-11-25-22-32v-1c-4 0-5 3-8 3-37-13-57-43-83-66-2-18-20-17-26-29-10-21-8-41-20-62-4-6-12-9-16-16-3-6-3-13-7-20-4-5-10-8-13-13-6-8-7-19-12-28z"
				fill="#F2D76B"
			/>
		</g>
	</svg>
)

Moon.propTypes = {
	scale: PropTypes.number,
}

Moon.defaultProps = {
	scale: 0.1,
}

export default Moon