import React, { Component } from "react";

class GifSearch extends Component {

	constructor(props) {
		super(props)
		this.state = {
			search_string: "Search"
		}


	}

	handleSearchChange = event => {
		this.setState({search_string: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.search(this.state.search_string)
	}


	render() {
		return (
			<div>
				<form onSubmit={event => this.handleSubmit(event)}>
					<input type="text" onChange={event => this.handleSearchChange(event)} value={this.state.search_string}/>
					<input type="submit"/>
				</form>
			</div>
		)
	}

}

export default GifSearch;