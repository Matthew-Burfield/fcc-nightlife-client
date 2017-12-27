export const getAccessToken = () => {
	if (window && window.localStorage && window.localStorage.fccvotingapp) {
		return JSON.parse(window.localStorage.fccvotingapp).access_token
	}
	return null
}

export const getLocalStorageValue = value => {
	if (window && window.localStorage && window.localStorage.nightlife) {
		const nightlife = JSON.parse(window.localStorage.nightlife)
		if (nightlife[value]) {
			return nightlife[value]
		}
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
