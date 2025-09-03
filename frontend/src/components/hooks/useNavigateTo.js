import { useNavigate } from 'react-router-dom';



const useNavigateTo = () => {
    const navigate = useNavigate();

    const goToHome = () => navigate('/');
    const goToCreateVideoMeet = () => navigate('/createVideoMeet');
    const gotoVideoMeet = () => window.open('/VideoMeet', '_blank');
    const goBack = () => navigate(-1);

    return {
        goToCreateVideoMeet, gotoVideoMeet, goBack, goToHome
    }

};

export default useNavigateTo;
