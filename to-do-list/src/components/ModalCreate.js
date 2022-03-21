import React, { Component } from 'react';
import './ModalCreate.css'
class ModalCreate extends Component {
    render() {
        return (
            <div className="modal-container">
                <button onClick={this.props.toggleModal}>Create Card</button>
                <button onClick={this.props.clearAll}>Clear All</button>
            </div>
        );
    }
}
export default React.memo(ModalCreate);