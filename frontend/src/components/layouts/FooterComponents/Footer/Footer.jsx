import React from 'react'
import useCurrentYear from '../../../hooks/useCurrentYear';


//import css
import "./Footer.css";

//import img
import GitHub from '../../../../assets/icons/icon-github.png';
import Gmail from '../../../../assets/icons/icon-gmail.png';
import LinkeDin from '../../../../assets/icons/icon-linkedin.png';
import Location from '../../../../assets/icons/icon-location.png';
import CopyRight from '../../../../assets/icons/icon-copyrights.png';
import MyPortfolio from '../../../../assets/icons/iconPortfolio.png';
import Image from '../../Images/Image';

//import components

const Footer = () => {
    const currentYear = useCurrentYear();

    return (
        <footer className="footerContent" >
            <section className='footerMainContent'>
                <section className="footerAddres">
                    <h1>Address:</h1>
                    <address> Stockholm, Sweden
                        <a href="https://www.google.com/maps/place/Stockholm/@59.0968211,17.5065602,7.75z/data=!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM?entry=ttu" target="_blank"><Image src={Location} alt="" className='footerImg' />
                        </a>
                    </address>
                </section>

                <section className="footerMidleContent">
                    <Image src={CopyRight} alt="" variant='footerImg' />
                    <p className='footerText'>Copyright</p>
                    <p className='footerText'>{currentYear} by Nikola Zovko</p>
                </section>

                <section className="contactFooter">
                    <h1>Contact:</h1>
                    <div className="contactFooterLink">
                        <a href="mailto:nikolajoe95@gmail.com" target="_blank">
                            <Image src={Gmail} alt="" variant='footerImg' title="Gmail" />
                        </a>
                        <a href="https://github.com/Nikolaz95" target="_blank">
                            <Image src={GitHub} alt="" variant='footerImg' title="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/nikola-zovko-a50779247/" target="_blank">
                            <Image src={LinkeDin} alt="" variant='footerImg' title="Linkedin" />
                        </a>
                        <a href="https://nikolazovko-portfolio.netlify.app/" target="_blank">
                            <Image src={MyPortfolio} alt="" variant='footerImg' title="MyPortfolio" />
                        </a>
                    </div>
                </section>
            </section>
        </footer>
    )
}

export default Footer