import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router';
import { Toaster } from 'react-hot-toast';
import titleName from '../..//hooks/useTitle';
import { useGetMeQuery } from '../../../redux/api/userApi';


//import css
import './TravelMapPage.css';


//import components
import Button from '../../layouts/Buttons/Button';
import Modal from '../../layouts/ModalComponent/Modal';
import TravelMapSideBar from './TravelMapPageContent/TravelMapSideBar';
import MapContent from './TravelMapPageContent/MapContent';
import ContentModal from '../../layouts/ModalComponent/ModalLayouts/ModalContent/ContentModal';
import Image from '../../layouts/Images/Image';
import Navigation from '../../layouts/NavigatioLinkComponent/Navigation';
import { mapImg } from '../../../assets/Icons';

const MOBILE_QUERY = "(max-width: 700px)";

const TravelMapPage = () => {
    const navigate = useNavigate();
    titleName('Your travel experience');

    // This page has no header, so the logged-in user is loaded here
    useGetMeQuery();

    // On mobile the sidebar is shown in a modal
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const closeModal = useCallback(() => {
        setIsPanelOpen(false);
        navigate("cities");
    }, [navigate]);

    // Open the modal only on mobile (on desktop the sidebar is always visible)
    const openModal = useCallback(() => {
        if (window.matchMedia(MOBILE_QUERY).matches) {
            setIsPanelOpen(true);
        }
    }, []);

    return (
        <>
            <Toaster position="top-center" />
            <section className="travelMapPageLayout">
                <TravelMapSideBar />
                <MapContent openModal={openModal} />
                <Navigation to="/" variant="mapHomeLink">← Home</Navigation>
                <Button onClick={() => { setIsPanelOpen(true); navigate("cities"); }} variant="btnSideBarTravel">
                    <Image src={mapImg} alt="" variant="btnIcon" />
                    My trips
                </Button>
            </section>
            <Modal isOpen={isPanelOpen} onClose={closeModal}>
                <ContentModal onClose={closeModal} />
            </Modal>
        </>
    )
}

export default TravelMapPage
