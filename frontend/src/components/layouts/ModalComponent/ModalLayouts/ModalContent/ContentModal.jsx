import React from 'react'

//import css
import "./ContentModal.css";
import TravelPanel from '../../../../page/TravelMapPage/TravelMapPageContent/TravelPanel';

const ContentModal = ({ onClose }) => {
    return (
        <section className="modallContent">
            <TravelPanel onClose={onClose} />
        </section>
    )
}

export default ContentModal
