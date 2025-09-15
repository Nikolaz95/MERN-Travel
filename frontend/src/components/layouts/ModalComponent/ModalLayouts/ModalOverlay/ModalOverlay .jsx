import React from 'react'
import ReactDOM from "react-dom";


//import css
import "./ModalOverlay.css";

const ModalOverlay = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <section className="modalOverlay" onClick={onClose}>
            {children}
        </section>,
        document.body
    );
}

export default ModalOverlay 