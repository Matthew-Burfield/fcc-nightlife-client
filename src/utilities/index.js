import axios from 'axios'

export const BASE_URL =
	process.env.NODE_ENV === 'production'
		? 'https://burfield-nightlife-server.herokuapp.com'
		: 'http://localhost:8000'

export const cleanupRequestTokens = () => {
	if (window && window.localStorage) {
		delete window.localStorage.request_token
		delete window.localStorage.request_secret
	}
}

export const logout = () => {
	if (window && window.localStorage) {
		delete window.localStorage.access_token
		delete window.localStorage.access_secret
	}
}

export const getLocalStorageValue = value => {
	if (window && window.localStorage && window.localStorage[value]) {
		return window.localStorage[value]
	}
	return null
}

export const saveParamStringToLocalStorage = paramsString => {
	const params = paramsString.slice(1).split('&')
	params.forEach(param => {
		const item = param.split('=')
		window.localStorage[item[0]] = item[1]
	})
}

export const getParamsFromString = paramsString => {
	const params = paramsString.slice(1).split('&')
	return params.reduce((obj, param) => {
		const item = param.split('=')
		return {
			...obj,
			[item[0]]: item[1],
		}
	}, {})
}

export const registerForRestaurant = restaurantId => {
	const userAccessId = getLocalStorageValue('access_token')
	const userAccessSecret = getLocalStorageValue('access_secret')
	return axios.post(
		`${BASE_URL}/register`,
		{ id: restaurantId },
		{ headers: { Authorization: `${userAccessId}.${userAccessSecret}` } }
	)
}

export const isUserSignedIn = () => {
	const userAccessId = getLocalStorageValue('access_token')
	const userAccessSecret = getLocalStorageValue('access_secret')

	if (userAccessId && userAccessSecret) {
		return true
	}
	return false
}
