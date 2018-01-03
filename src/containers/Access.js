import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import {
	cleanupRequestTokens,
	getLocalStorageValue,
	saveParamStringToLocalStorage,
} from '../utilities'

class Access extends Component {
	constructor(props) {
		if (window && window.location && window.location.hash && window.location.hash.length > 1) {
			saveParamStringToLocalStorage(window.location.hash)
			cleanupRequestTokens()
		}
		super(props)
		this.state = {
			hasAccess: !!getLocalStorageValue('access_token'),
		}
	}

	render() {
		if (this.state.hasAccess) {
			return <Redirect to="/" />
		}
		return null
	}
}

export default Access
