import React, { Component } from "react";
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends Component {

	constructor() {
	    super();
	    this.state = {
	      gifs: []
	    };
  	}

	componentDidMount() {
		fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
	      .then(response => response.json())
	      .then(data => {
	      	let gif_url_array = []
	      	for(let i = 0; i<=2; i++) {
	      		gif_url_array.push(data.data[i].images.original.url)
	      	}
	      	this.setState({gifs: gif_url_array})
	      })
	}

	handleSearch(search_string) {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${search_string}&api_key=dc6zaTOxFJmzC&rating=g`)
	      .then(response => response.json())
	      .then(data => {
	      	debugger
	      	console.log(data)
	      	let gif_url_array = []
	      	for(let i = 0; i<=data.data.length; i++) {
	      		debugger
	      		gif_url_array.push(data.data[i].images.original.url)
	      	}
	      	this.setState({gifs: gif_url_array})
	      })
	}



	render () {
		return (
			<div>
				< GifSearch search={this.handleSearch} />
				< GifList gifs={this.state.gifs} />				
			</div>
		)
		
	}


}

export default GifListContainer;

