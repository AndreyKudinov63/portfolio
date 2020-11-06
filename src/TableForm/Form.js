import React, { Component } from 'react'
import {Navbar, NavLink, Nav, Container, Row, Col, Button, FormGroup}  from "react-bootstrap";

class Form extends Component {
	initialState = {
		name: '',
		job: '',
	}

	state = this.initialState


	handleChange = event => {
		const { name, value } = event.target

		this.setState({
			[name]: value,
		})
	}

	submitForm = () => {
		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	}



	render() {
		const { name, surname } = this.state;

		return (
		
			    	<form class="col-md-3 col-md-offset-3">
			    		<div class="form-group">
			    			<label class="" htmlFor="name">Name</label>
			    			<input
			    				class="form-control"
			    				type="text"
			    				name="name"
			    				id="name"
			    				value={name}
			    				onChange={this.handleChange} />
			    			<label class="" htmlFor="job">Job</label>
			    		</div>
			    		<div class="form-group">
			    			<input
			    				class="form-control"
			    				type="text"
			    				name="surname"
			    				id="surname"
			    				value={surname}
			    				onChange={this.handleChange} />
			    			<input  type="button" value="Submit" class="btn-outline-primary btn-sm btn-change7" onClick={this.submitForm} />
			    		</div>
			    	</form>	
		

		);
	}
}

export default Form