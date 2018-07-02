import React from 'react';
import Modal from 'react-modal';

 const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Example Modal"
            >
            {props.selectedOption && <p> {props.selectedOption}</p> }
        <button onClick={props.handleModel}>Ok</button>
    </Modal>
 )

 export default OptionModal;