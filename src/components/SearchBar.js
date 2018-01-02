import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
	static propTypes = {
		onSearch: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)
		this.state = {
			searchValue: '',
		}
	}

	handleOnChange = e => {
		this.setState({
			searchValue: e.currentTarget.value,
		})
	}

	handleOnKeyPress = e => {
		if (e.key === 'Enter') {
			this.prepareSearch()
		}
	}

	handleOnClick = () => {
		this.prepareSearch()
	}

	prepareSearch = () => {
		this.setState({ searchValue: '' })
		this.props.onSearch(this.state.searchValue)
	}

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Search a location"
					value={this.state.searchValue}
					onChange={this.handleOnChange}
					onKeyPress={this.handleOnKeyPress}
				/>
				<button onClick={this.handleOnClick}>Search</button>
			</div>
		)
	}
}

export default SearchBar
