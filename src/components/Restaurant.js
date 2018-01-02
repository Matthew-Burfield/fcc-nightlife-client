import React from 'react'

import { registerForRestaurant } from '../utilities'
import { restaurantProps } from '../utilities/propTypes'

const Restaurant = props => (
	<div>
		<p>{props.name}</p>
		<button onClick={() => registerForRestaurant(props.id)}>Current count: {props.count}</button>
	</div>
)

Restaurant.propTypes = {
	...restaurantProps,
}

export default Restaurant
