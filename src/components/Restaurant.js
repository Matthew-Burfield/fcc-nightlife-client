import React from 'react'
import PropTypes from 'prop-types'

import { restaurantProps } from '../utilities/propTypes'

const Restaurant = props => (
	<div>
		<p>{props.name}</p>
		<button onClick={() => props.register(props.id)}>Current count: {props.count}</button>
	</div>
)

Restaurant.propTypes = {
	register: PropTypes.func.isRequired,
	...restaurantProps,
}

export default Restaurant
