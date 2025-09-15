import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';
import titleName from '../..//hooks/useTitle';
import useFetch from '../../hooks/useFetch';


//import css
import './TravelMapPage.css';

//import img

import mapImg from "../../../assets/icons/iconMap.png";

//import components
import VideoBackground from '../../layouts/VideoBackground/VideoBackground ';
import Button from '../../layouts/Buttons/Button';
import Text1 from '../../layouts/ModalComponent/ModalLayouts/ModalContent/Text1';
import Modal from '../../layouts/ModalComponent/Modal';
import TravelMapSideBar from './TravelMapPageContent/TravelMapSideBar';
import MapContent from './TravelMapPageContent/MapContent';
import ContentModal from '../../layouts/ModalComponent/ModalLayouts/ModalContent/ContentModal';
import Image from '../../layouts/Images/Image';

const TravelMapPage = () => {
    titleName('Your travel experience');
    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");
    // Function to close the modal
    const closeModal = () => setActiveModal("");
    return (
        <>
            <VideoBackground />
            <Button onClick={() => setActiveModal("text1")} variant="btnSideBarTravel">
                <Image src={mapImg} variant="btnIcon" />
            </Button>
            <section className="travelMapPageLayout">
                <TravelMapSideBar />
                <MapContent />
            </section>
            {/* Modal for Text1 */}
            <Modal isOpen={activeModal === "text1"} onClose={closeModal}>
                <ContentModal onClose={closeModal} /* dataInfo={dataInfo} */ /* formatDate={formatDate} */ />
            </Modal>
        </>
    )
}

export default TravelMapPage