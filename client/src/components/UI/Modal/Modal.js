import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideModal } from "../../../store/actions/ui";

import classes from './Modal.module.scss';

class Modal extends Component {
    render() {
        return(
            <div className={classes.Modal}>
                <div
                    onClick={this.props.hideModal}
                    className={classes.ModalClickable} />
                <div className={classes.ModalContent}>
                    {this.props.modalContent}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    modalContent: state.ui.modalContent
});

export default connect(
    mapStateToProps,
    {
        hideModal
    }
)(Modal);