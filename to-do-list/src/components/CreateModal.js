import { Component } from 'react';
import './CreateModal.css'
class CreateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="modal-container">
                <button onClick={this.props.toggleModal}>Create Card</button>
                <button onClick={this.props.clearAll}>Clear All</button>
            </div>
        );
    }
}
export default CreateModal;