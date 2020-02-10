import React, { Component } from "react";

class GifList extends Component {


	renderGifs = () => {
		return this.props.gifs.map(gif => {
			return <li><img src={gif} alt="Pic" /></li>
		})
	}

	render () {
		return (
			<ul>
					{this.renderGifs()}
			</ul>
		)
	}

}

export default GifList;