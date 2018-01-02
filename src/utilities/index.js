import axios from 'axios'

export const BASE_URL =
	process.env.NODE_ENV === 'production'
		? 'https://burfield-nightlife-server.herokuapp.com'
		: 'http://localhost:8000'

export const getLocalStorageValue = value => {
	if (window && window.localStorage && window.localStorage[value]) {
		return window.localStorage[value]
	}
	return null
}

export const removeLocalTokens = () => {
	if (
		window &&
		window.localStorage &&
		window.localStorage.fccvotingapp &&
		window.localStorage.fccvotingapp.length
	) {
		window.localStorage.fccvotingapp = ''
	}
}

export const saveParamStringToLocalStorage = paramsString => {
	if (!window.localStorage.nightlife) {
		window.localStorage.nightlife = JSON.stringify({})
	}
	const params = paramsString
		.slice(1)
		.split('&')
		.reduce((obj, val) => {
			const item = val.split('=')
			return {
				...obj,
				[item[0]]: item[1],
			}
		}, {})
	const newParams = {
		...JSON.parse(window.localStorage.nightlife),
		...params,
	}
	window.localStorage.nightlife = JSON.stringify(newParams)
}

export const registerForRestaurant = restaurantId => {
	const userAccessId = getLocalStorageValue('access_token')
	const userAccessSecret = getLocalStorageValue('access_secret')
	axios.post(
		`${BASE_URL}/register`,
		{ id: restaurantId },
		{ headers: { Authorization: `${userAccessId}.${userAccessSecret}` } }
	)
}
