import React, { Component } from 'react';
import classes from './Modal.module.scss';
import { connect } from 'react-redux';
import { hideModal } from "../../../store/actions/workouts";

class Modal extends Component {
    render() {
        return(
            <div className={classes.Modal}>
                <div onClick={this.props.hideModal} className={classes.ModalClickable}></div>
                {this.props.children}
            </div>
        )
    }
}

export default connect(null, {hideModal})(Modal);