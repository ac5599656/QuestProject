import React from 'react';
import Modal from 'react-bootstrap/Modal'
import "./style.css"

const SaveModal = (props) => {
    return <Modal show={props.show} onHide={props.close}>
        <form onSubmit={e => { 
            e.preventDefault();
            props.saveQuest(); 
            props.close()}
        }>
            <Modal.Header>
                <h3>Create adventure title</h3>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.children}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button 
                    className="btn-cancel" 
                    onClick={props.close}
                >
                    Cancel
                </button>
                <button 
                    className="btn-continue" 
                    type="submit" 
                >
                    Save
                </button>
            </Modal.Footer>
        </form>
    </Modal>
}

export default SaveModal;