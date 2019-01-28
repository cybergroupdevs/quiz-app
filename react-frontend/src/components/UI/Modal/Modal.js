import React, { Component } from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'
import Card from '../Card/Card'

class Modal extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}

	render() {
		return (
			<Aux>
				<Backdrop  
					show={this.props.show}
					clicked={this.props.modalClosed} />
				<div
					className={[classes.Modal, this.props.className].join(' ')}
					style={{
						transform: this.props.show ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}>
					<Card onclose={this.props.modalClosed} header={this.props.header}>
						{this.props.children}
					</Card>
				</div>
			</Aux>
		)
	}
}

export default Modal