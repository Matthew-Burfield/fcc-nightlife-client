import { Component } from 'react'

import {
	BASE_URL,
	getLocalStorageValue,
	getParamsFromString,
	saveParamStringToLocalStorage,
} from '../utilities'

class Authenticate extends Component {
	componentDidMount() {
		const url = new URL(window.location.href)
		saveParamStringToLocalStorage(url.search)
		const requestToken = getLocalStorageValue('request_token')
		const requestSecret = getLocalStorageValue('request_secret')
		const { oauth_token: oauthToken, oauth_verifier: oauthVerifier } = getParamsFromString(
			url.search
		)
		if (requestToken !== oauthToken) {
			debugger
		}
		window.location.replace(
			`${BASE_URL}/authenticate?token=${requestToken}&secret=${requestSecret}&verifier=${oauthVerifier}`
		)
	}

	render() {
		return null
	}
}

export default Authenticate
