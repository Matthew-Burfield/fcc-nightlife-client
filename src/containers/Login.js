import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { getLocalStorageValue, saveParamStringToLocalStorage } from '../utilities'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirect: !!getLocalStorageValue('access_token'),
		}
	}
	componentDidMount() {
		if (!this.state.redirect) {
			if (window && window.location && window.location.hash && window.location.hash.length > 1) {
				saveParamStringToLocalStorage(window.location.hash)
				// Check if the access token and id token are in localStorage
				// (i.e. they are already logged in)
				const tokenId = getLocalStorageValue('request_token')
				if (tokenId) {
					window.location.replace(
						`https://api.twitter.com/oauth/authenticate?oauth_token=${tokenId}`
					)
				}
			}
		}
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />
		}
		return null
	}
}

export default Login
