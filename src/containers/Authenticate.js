import { Component } from 'react'

import { getLocalStorageValue, saveParamStringToLocalStorage } from '../utilities'

class Authenticate extends Component {
	componentDidMount() {
		const url = new URL(window.location.href)
		saveParamStringToLocalStorage(url.search)
		const requestToken = getLocalStorageValue('request_token')
		const requestTokenSecret = getLocalStorageValue('request_secret')
		const oauthToken = getLocalStorageValue('oauth_token')
		const requestVerifier = getLocalStorageValue('oauth_verifier')
		if (requestToken !== oauthToken) {
			debugger
		}
		window.location.replace(
			`http://localhost:8000/authenticate?token=${requestToken}&secret=${requestTokenSecret}&verifier=${requestVerifier}`
		)
	}

	render() {
		return null
	}
}

export default Authenticate
