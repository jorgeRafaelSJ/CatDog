import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { testRequest } from '../action-creators'

class HomePage extends React.Component {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		this.props.test();
	}

	render() {
		return(
			<div className="hello">
			Hello World! 
			</div>
		);
	}
}

// CONNECT TO REDUX AND EXPORT COMPONENT 
function mapStateToProps(state) {
	return { home: state.home }
}

function mapDispatchToProps(dispatch) {
	return { 
		test: bindActionCreators(testRequest, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)