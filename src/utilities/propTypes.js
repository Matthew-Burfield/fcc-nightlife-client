import PropTypes from 'prop-types'

export const restaurantProps = {
	count: PropTypes.number,
	id: PropTypes.string,
	name: PropTypes.string,
	photos: PropTypes.arrayOf(PropTypes.string),
	rating: PropTypes.number,
}
