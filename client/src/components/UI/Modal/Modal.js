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
                {this.props.ui.modalContent}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ui: state.ui
});

export default connect(
    mapStateToProps,
    {
        hideModal
    }
)(Modal);