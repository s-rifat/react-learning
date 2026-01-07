import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Vishwas'
		}
		console.log('LifecycleA constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps')
		return null
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
	}

	render() {
		console.log('LifecycleA render')
		return (
			<div>
				<button onClick={this.changeState}>Change state</button>
				LifecycleA<LifecycleB />
			</div>
		)
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
    	return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount')
	}

	changeState = () => {
		this.setState({
			name: 'Codevolution'
		})
	}
}

export default LifecycleA
