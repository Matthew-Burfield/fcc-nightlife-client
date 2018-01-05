import React from 'react'
import PropTypes from 'prop-types'

import { restaurantProps } from '../utilities/propTypes'

const Restaurant = props => {
	if (props.render) {
		return props.render(props)
	}
	return (
		<div
			style={{ background: 'rgba(255, 255, 255, 0.5)', borderRadius: 2, padding: 10, margin: 5 }}
		>
			{props.image_url && props.image_url.length > 0 ? (
				<div>
					<img
						style={{ borderRadius: 2 }}
						height={100}
						alt={'restaurant thumbnail'}
						src={props.image_url}
					/>
				</div>
			) : null}
			<div>Name: {props.name}</div>
			<div>Rating: {props.rating} / 5</div>
			<button onClick={() => props.register(props.id)}>Current count: {props.count}</button>
		</div>
	)
}

Restaurant.propTypes = {
	register: PropTypes.func.isRequired,
	render: PropTypes.func,
	index: PropTypes.number.isRequired,
	...restaurantProps,
}

Restaurant.defaultProps = {
	render: null,
}

export default Restaurant
