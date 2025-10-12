import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router';
import titleName from '../..//hooks/useTitle';
import useFetch from '../../hooks/useFetch';


//import css
import './TravelMapPage.css';

//import img

import mapImg from "../../../assets/icons/iconMap.png";

//import components
import VideoBackground from '../../layouts/VideoBackground/VideoBackground ';
import Button from '../../layouts/Buttons/Button';
import Modal from '../../layouts/ModalComponent/Modal';
import TravelMapSideBar from './TravelMapPageContent/TravelMapSideBar';
import MapContent from './TravelMapPageContent/MapContent';
import ContentModal from '../../layouts/ModalComponent/ModalLayouts/ModalContent/ContentModal';
import Image from '../../layouts/Images/Image';

const TravelMapPage = () => {
    const navigate = useNavigate();
    titleName('Your travel experience');
    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");
    // Function to close the modal
    const closeModal = () => {
        setActiveModal("");
        navigate("cities");
    };


    const openModal = () => {
        if (window.innerWidth <= 700) {
            setActiveModal("content");
            navigate("newVisiting");
        } else {
            navigate("newVisiting");
        }
    };
    return (
        <>
            <VideoBackground />
            <Button onClick={openModal} variant="btnSideBarTravel">
                <Image src={mapImg} variant="btnIcon" />
            </Button>
            <section className="travelMapPageLayout">
                <TravelMapSideBar />
                <MapContent openModal={openModal} />
            </section>
            {/* Modal for Text1 */}
            <Modal isOpen={activeModal === "content"} onClose={closeModal}>
                <ContentModal />
            </Modal>
        </>
    )
}

export default TravelMapPage